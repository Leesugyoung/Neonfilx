import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  getMovieCredit,
  getMovieDetail,
  IGetMovieCredit,
  IGetMovieDetail,
} from "../../api";
import * as H from "../../styled-components/StyledHome";
import * as M from "../../styled-components/StyledModal";
import { makeImagePath } from "../../utils/utils";

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
  id: string;
}

function MovieDetail({ category, id }: IDetailProps) {
  // movie detail API
  const { data: detailData, isLoading: detailLoading } =
    useQuery<IGetMovieDetail>(["movie", `${category}_detail`], () =>
      getMovieDetail(id)
    );

  // movie  API
  const { data: creditData, isLoading: creditLoading } =
    useQuery<IGetMovieCredit>(["movie", `${category}_credit`], () =>
      getMovieCredit(id)
    );

  // 오버레이 클릭 시 뒤로가기 기능
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);

  // 출연진 3명 불러오기
  const actor = creditData?.cast.slice(0, 3);

  // 감독 정보
  const director = creditData?.crew.find(
    people => people.known_for_department === "Directing"
  );

  // 영화 개봉 날짜
  const openday = detailData?.release_date;
  const sub_Openday = openday?.substring(0, 4);

  return (
    <AnimatePresence>
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
            layoutId="id"
            variants={modalVariants}
            initial="initial"
            animate="click"
            exit="exit"
          >
            {detailData ? (
              <Helmet>
                <title>
                  {detailData.title
                    ? detailData.title
                    : detailData.original_title}
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
            <M.Poster_Title>{detailData?.title}</M.Poster_Title>
            <M.Poster_infomation_top>
              <span>{sub_Openday}</span>
              <span>{detailData?.genres[0].name}</span>
              <span>
                ⭐
                {detailData?.vote_average
                  ? Math.floor(detailData?.vote_average)
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
                  <span>Director:</span>
                  {director?.name}
                </M.Poster_director>
              </M.Poster_acter_and_director>
            </M.Poster_infomation_bottom>
          </M.Modal>
        </>
      )}
    </AnimatePresence>
  );
}

export default MovieDetail;
