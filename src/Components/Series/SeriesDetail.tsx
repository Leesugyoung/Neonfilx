import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IGetCredit, IGetDetail } from "../apis/Mov_Ser_Api";
import * as H from "../../styled-components/StyledHome";
import * as M from "../../styled-components/StyledModal";
import { makeImagePath } from "../../utils/utils";
import { getSeriesCredit, getSeriesDetail } from "../apis/Mov_Ser_Api";

// ----------Variants----
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  exit: { opacity: 0 },
};

const modalVariants = {
  initial: { opacity: 0 },
  click: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};
// -----------------------

interface IDetailProps {
  category: string;
  tv_id: string;
}

function SeriesDetail({ category, tv_id }: IDetailProps) {
  // Detail API
  const { data: detailData, isLoading: detailLoading } = useQuery<IGetDetail>(
    ["tv", `${category}_detail`],
    () => getSeriesDetail(tv_id)
  );

  console.log(detailData);
  // Credit API
  const { data: creditData, isLoading: creditLoading } = useQuery<IGetCredit>(
    ["tv", `${category}_credit`],
    () => getSeriesCredit(tv_id)
  );

  // 오버레이 클릭 시 뒤로가기 기능
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);

  // 출연진 5명 불러오기
  const actor = creditData?.cast.slice(0, 5);

  // 감독 정보
  const production = creditData?.crew.find(
    people =>
      people.known_for_department === "Production" ||
      people.known_for_department === "Directing"
  );

  // 시리즈 개봉 날짜
  const openday_data = detailData?.first_air_date;
  const sub_Openday = openday_data?.substring(0, 4);

  return (
    <>
      {detailLoading && creditLoading ? (
        <H.Loader>Loading...</H.Loader>
      ) : (
        <>
          <M.Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onOverlayClick}
          />
          <M.Modal
            variants={modalVariants}
            initial="initial"
            animate="click"
            exit="exit"
          >
            {detailData ? (
              <Helmet>
                <title>
                  {detailData.name ? detailData.name : detailData.original_name}
                </title>
              </Helmet>
            ) : (
              "Neonfilx"
            )}
            <M.Modal_Poster
              style={{
                backgroundImage: ` linear-gradient(to top, #181818, transparent), url(${makeImagePath(
                  detailData!.backdrop_path,
                  "w500"
                )})`,
              }}
            />
            <M.Poster_prevBtn onClick={onOverlayClick}>✕</M.Poster_prevBtn>
            <M.Poster_Title>{detailData?.name}</M.Poster_Title>
            <M.Poster_infomation_top>
              <span>{sub_Openday}</span>
              {detailData?.genres.slice(0, 3).map((genre, index) => (
                <p id="genrs" key={genre.id}>
                  {genre.name}
                  {index !== detailData.genres.length - 1 && " · "}
                </p>
              ))}
              <span>
                ⭐
                {detailData?.vote_average
                  ? (detailData?.vote_average).toFixed(1)
                  : "not vote"}
              </span>
            </M.Poster_infomation_top>

            <M.Poster_infomation_bottom>
              <M.Poster_overview>{detailData?.overview}</M.Poster_overview>
              <M.Poster_acter_and_director>
                <M.Poster_actor>
                  <span>Casting:</span>
                  {actor &&
                    actor.map(cast => <div key={cast.id}> {cast.name},</div>)}
                </M.Poster_actor>
                <M.Poster_director>
                  <span>
                    {production?.known_for_department === "Production"
                      ? "Production:"
                      : production?.known_for_department === "Directing"
                      ? "Director:"
                      : null}
                  </span>
                  {production?.known_for_department === "Production"
                    ? production.name
                    : production?.known_for_department === "Directing"
                    ? production.name
                    : null}
                </M.Poster_director>
              </M.Poster_acter_and_director>
            </M.Poster_infomation_bottom>
          </M.Modal>
        </>
      )}
    </>
  );
}

export default React.memo(SeriesDetail);
