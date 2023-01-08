import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IGetCredit, IGetDetail } from "../../apis/Movi_Ser_Api";
import * as H from "../../styled-components/StyledHome";
import * as M from "../../styled-components/StyledModal";
import { makeImagePath } from "../../utils/utils";
import { getMovieCredit, getMovieDetail } from "../../apis/Movi_Ser_Api";

interface IDetailProps {
  category?: string;
  id: string;
}

function MovieDetail({ category, id }: IDetailProps) {
  const navigate = useNavigate();

  // movie detail API
  const { data: detailData, isLoading: detailLoading } = useQuery<IGetDetail>(
    ["movie", `${category}_detail`],
    () => getMovieDetail(id)
  );

  // movie  API
  const { data: creditData, isLoading: creditLoading } = useQuery<IGetCredit>(
    ["movie", `${category}_credit`],
    () => getMovieCredit(id)
  );

  // 출연진 5명 불러오기
  const actor = creditData?.cast.slice(0, 5);
  // 감독 정보
  const director = creditData?.crew.find(
    people => people.known_for_department === "Directing"
  );
  // 영화 개봉 날짜
  const sub_Openday = detailData?.release_date.substring(0, 4);

  /*  useEffect(() => {
    console.log("렌더링 중");
  }, []); */
  return (
    <>
      {detailLoading && creditLoading ? (
        <H.Loader>Loading...</H.Loader>
      ) : (
        <>
          <M.Overlay
            variants={M.overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => navigate(-1)}
          />
          <M.Modal
            variants={M.modalVariants}
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
              bgphoto={makeImagePath(
                detailData?.backdrop_path
                  ? detailData!.backdrop_path
                  : detailData!.poster_path,
                "w500"
              )}
            />
            <M.Poster_prevBtn onClick={() => navigate(-1)}>✕</M.Poster_prevBtn>
            <M.Poster_Title>{detailData?.title}</M.Poster_Title>
            <M.Poster_MiniTitle>{detailData?.title}</M.Poster_MiniTitle>
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
                  {actor?.map((cast, index) => (
                    <div key={cast.id}>
                      {cast.name ? cast.name : "No data"},
                    </div>
                  ))}
                </M.Poster_actor>
                <M.Poster_director>
                  <span>Director:</span>
                  {director?.name ? director?.name : "No data"}
                </M.Poster_director>
              </M.Poster_acter_and_director>
            </M.Poster_infomation_bottom>
          </M.Modal>
        </>
      )}
    </>
  );
}

export default MovieDetail;
