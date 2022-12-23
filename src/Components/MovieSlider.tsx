import { useState } from "react";
import useWindowDimensions from "../Components/useWindowDimensions.tsx";
import * as H from "../styled-components/StyledHome";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

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

function MovieSlider() {
  // now playing API
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  // - 슬라이더 내에 한번에 보여주고싶은 영화의 개수
  const offset = 6;

  // - 슬라이드 다음,이전으로 넘기기위한 인덱스
  const [index, setIndex] = useState(0);

  // - nextIndex : index state 증가 함수
  const nextIndex = () => {
    if (data) {
      // 애니메이션이 아직 끝나지 않았다면
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length;
      // 총 영화 개수에서 타이틀에 걸린 영화 1개 제외한 값
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      // 완벽한 정수가 나오지 않을 수 있으므로 반올림처리
      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  // - prevIndex : index state 감소 함수
  const prevIndex = () => {
    if (data) {
      // 애니메이션이 아직 끝나지 않았다면
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length;
      // 총 영화 개수에서 타이틀에 걸린 영화 1개 제외한 값
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      // 완벽한 정수가 나오지 않을 수 있으므로 반올림처리
      setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  // -leaving : 슬라이드 내에 이동중인 애니메이션이 끝났는지 확인
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving(prev => !prev);

  // - Box 클릭시 url 이동
  const navigate = useNavigate();
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const onOverlayClick = () => navigate(-1); // 뒤로가기 기능

  // - width 조절
  const width = useWindowDimensions();

  // "/movies/:movieId" URL 로 이동하였는지 확인
  const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      movie => movie.id + "" === bigMovieMatch?.params.movieId
    );

  return (
    <>
      <H.Slider>
        <H.Slider_Title>Now Playing</H.Slider_Title>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          {/* → exit 이 끝났을때 toggleLeaving을 호출 */}
          <H.prevBtn onClick={prevIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </H.prevBtn>
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
                  <H.RowBox_Info variants={infoVariants}>
                    <h4>{movie.title}</h4>
                  </H.RowBox_Info>
                </H.RowBox>
              ))}
          </H.Row>
          <H.nextBtn onClick={nextIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </H.nextBtn>
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
  );
}

export default MovieSlider;
