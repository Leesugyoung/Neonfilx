import { useQuery } from "@tanstack/react-query";
import {
  PathMatch,
  useLocation,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import {
  getSearchMovie,
  getSearchTv,
  IGetSearch,
} from "../Components/apis/SearchApi";
import styled from "styled-components";
import { makeImagePath } from "../utils/utils";
import { motion } from "framer-motion";
import * as M from "../styled-components/StyledModal";

const Wrapper = styled.div`
  margin-top: 80px;
  height: 40vh;
`;

const Notingdiv = styled.div`
  padding-top: 250px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  color: #808080;
  margin-bottom: 50px;
  span {
    color: ${props => props.theme.white.lighter};
  }
`;

const Searching = styled.div`
  padding: 60px;
`;

const Searching_Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 500;
  color: ${props => props.theme.white.darker};
  span {
    font-size: 25px;
    margin-right: 3px;
  }
`;

const SearchRow_movie = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  margin-bottom: 60px;
`;

const SearchRow_series = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  margin-bottom: 40px;
`;

const RowBox = styled(motion.div)<{ bgphoto: string }>`
  height: 135px;
  border-radius: 3px;
  background-image: url(${props => props.bgphoto});
  background-color: ${props =>
    props.theme.black.lighter}; // bgphoto 가 없을 경우 띄워지는
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  // 글자
  font-size: 10px;
  text-align: center;
  color: white;
`;

const RowBox_Info = styled(motion.div)`
  opacity: 0;
  padding: 10px;
  background-color: rgba(28, 28, 28, 0.6);
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 13px;
  }
`;

export const Modal_Poster = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props =>
    props.theme.black.lighter}; // bgphoto 가 없을 경우 띄워지는
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

// ----- Variants
const BoxHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -20,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
    },
  },
};

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  // keyword가 존재할 때만 검색어 API 가져오기
  const { data: movie_Data, refetch: movie_refetch } = useQuery<IGetSearch>(
    ["search", "movie"],
    () => getSearchMovie(keyword!),

    { enabled: !!keyword }
  );

  const { data: tv_Data, refetch: tv_refetch } = useQuery<IGetSearch>(
    ["search", "tv"],
    () => getSearchTv(keyword!),
    {
      enabled: !!keyword,
    }
  );

  const navigate = useNavigate();
  // movie- Box 클릭시 url 이동

  const MovieClick = (movieId: number) => {
    navigate(`/search/${movieId}?keyword=${keyword}`);
  };
  const MovieMatch: PathMatch<string> | null = useMatch(
    "/search/:movieId:keyword"
  );

  // seires- Box 클릭시 url 이동
  const SeriesClick = (tv_id: number) => {
    navigate(`/search/${tv_id}?keyword=${keyword}`);
  };
  const seiresMatch: PathMatch<string> | null = useMatch(
    "/search/:tv_id:keyword"
  );

  // 뒤로가기
  const onOverlayClick = () => navigate(-1);

  // keyword가 변경될 때만 movie_refetch()와 tv_refetch()가 실행될 수 있도록
  useEffect(() => {
    if (keyword) {
      movie_refetch();
      tv_refetch();
    }
  }, [keyword]);

  return (
    <>
      <Wrapper>
        <Helmet>
          <title>Neonfilx - Search</title>
        </Helmet>
        {keyword === null ? (
          <Notingdiv>
            <div>No search results found.</div>
            <div>
              Click the magnifying glass icon in the upper right to search!
            </div>
          </Notingdiv>
        ) : (
          // 검색 후
          <Searching>
            <Title>
              Result of searching with <span>{keyword}</span>
            </Title>
            {/* 검색 결과 */}
            <Searching_Title>
              <span>📽️</span>Movie
            </Searching_Title>
            <SearchRow_movie>
              {movie_Data?.results.map(data => (
                <RowBox
                  onClick={() => {
                    MovieClick(data.id);
                  }}
                  variants={BoxHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  bgphoto={makeImagePath(
                    data.backdrop_path
                      ? data.backdrop_path + ""
                      : data.poster_path + ""
                      ? data.poster_path + ""
                      : "No Image."
                  )}
                  key={`movie-${data.id}`}
                >
                  <RowBox_Info variants={infoVariants}>
                    <h4>{data.title ? data.title : data.name}</h4>
                  </RowBox_Info>
                </RowBox>
              ))}
            </SearchRow_movie>
            <Searching_Title>
              <span>📺</span>Series
            </Searching_Title>
            <SearchRow_series>
              {tv_Data?.results.map(data => (
                <RowBox
                  onClick={() => SeriesClick(data.id)}
                  variants={BoxHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  bgphoto={makeImagePath(
                    data.backdrop_path
                      ? data.backdrop_path + ""
                      : data.poster_path + ""
                  )}
                  key={`seireis-${data.id}`}
                >
                  <RowBox_Info variants={infoVariants}>
                    <h4>{data.title ? data.title : data.name}</h4>
                  </RowBox_Info>
                </RowBox>
              ))}
            </SearchRow_series>
          </Searching>
        )}
      </Wrapper>
      {/* 오버레이 영역 */}
      {MovieMatch && seiresMatch ? (
        <>
          <M.Overlay
            variants={M.overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <M.Modal
            variants={M.modalVariants}
            initial="initial"
            animate="click"
            exit="exit"
          >
            <M.Modal_Poster />
            <M.Poster_prevBtn onClick={onOverlayClick}>✕</M.Poster_prevBtn>
            <M.Poster_Title></M.Poster_Title>
          </M.Modal>
        </>
      ) : null}
    </>
  );
}

export default Search;
