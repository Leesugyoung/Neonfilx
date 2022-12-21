import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useWindowDimensions from "../Components/useWindowDimensions.tsx";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import * as H from "../styled-components/StyledHome";

// ----------Variants----
const RowBoxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -40,
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7 },
  exit: { opacity: 0 },
};
// ------------------

const offset = 6;
// 한번에 보여주고싶은 영화의 개수

function Home() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const navigate = useNavigate(); // 구) useHistroy
  const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const width = useWindowDimensions();
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length;
      // 총 영화 개수에서 타이틀에 걸린 영화 1개 제외한 값
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      // 완벽한 정수가 나오지 않을 수 있으므로 반올림처리(올림처리시 ceil)
      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving(prev => !prev);
  const onBoxClicked = (movieId: number) => {
    // 클릭한 영화의 id
    navigate(`/movies/${movieId}`);
  };
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const onOverlayClick = () => navigate(-1); // 뒤로가기 기능
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      movie => movie.id + "" === bigMovieMatch?.params.movieId
    );
  return (
    <H.Wrapper>
      {isLoading ? (
        <H.Loader>Loaidng...</H.Loader>
      ) : (
        <>
          <H.Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <H.Title>{data?.results[0].title}</H.Title>
            <H.Overview>{data?.results[0].overview}</H.Overview>
            <H.BtnContainer>
              <H.PlayBtn>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
                Play
              </H.PlayBtn>
              <H.InfoBtn> ⓘ Information</H.InfoBtn>
            </H.BtnContainer>
          </H.Banner>
          <H.Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {/* → exit 이 끝났을때 toggleLeaving을 호출 */}
              <H.Row
                initial={{ x: width }}
                animate={{ x: 0 }}
                exit={{ x: -width + 10 }} // 간격조절을 위한 + 10
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  //index 값에 따라 6 단위의 배열로 잘라냄
                  .map(movie => (
                    <H.RowBox
                      layoutId={movie.id + ""}
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      variants={RowBoxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <H.Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </H.Info>
                    </H.RowBox>
                  ))}
              </H.Row>
            </AnimatePresence>
          </H.Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <H.Overlay
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={onOverlayClick}
                />
                <H.BigMovie layoutId={bigMovieMatch.params.movieId}>
                  {clickedMovie && (
                    <>
                      <H.BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #181818, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <H.BigTitle>{clickedMovie.title}</H.BigTitle>
                      <H.BigOverview>{clickedMovie.overview}</H.BigOverview>
                    </>
                  )}
                </H.BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </H.Wrapper>
  );
}

export default Home;
