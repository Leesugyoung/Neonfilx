import { useState } from "react";
import * as H from "../../styled-components/StyledHome";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, Variants } from "framer-motion";
import { makeImagePath } from "../../utils/utils";
import { PathMatch, useMatch } from "react-router-dom";
import { IGetResult } from "../apis/Mov_Ser_Api";
import MovieDetail from "./MovieDetail";

// ----------Variants----
const RowVariants: Variants = {
  hidden: (isNext: boolean) => {
    return {
      x: isNext ? window.innerWidth : -window.innerWidth,
    };
  },
  visible: {
    x: 0,
  },
  exit: (isNext: boolean) => {
    return {
      x: isNext ? -window.innerWidth : window.innerWidth,
    };
  },
};
const BoxHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.5,
    y: -50,
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
// -----------------------

interface IBannerProps {
  data: IGetResult | undefined;
  title: string;
  category: string;
}

const MovieSlider: React.FC<IBannerProps> = ({ category, data, title }) => {
  // - 슬라이더 내에 한번에 보여주고싶은 영화의 개수
  const offset = 6;

  // - 슬라이드 다음, 이전으로 넘기기위한 인덱스
  const [index, setIndex] = useState(0);

  // 슬라이드 애니메이션 방향 설정
  const [isNext, setIsNext] = useState(true);

  // - leaving : 슬라이드 내에 이동중인 애니메이션이 끝났는지 확인
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving(prev => !prev);

  // - Box 클릭시 url 이동
  const navigate = useNavigate();
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  // "/movies/:movieId" URL 로 이동하였는지 확인
  const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");

  // - nextIndex : index state 증가 함수
  const nextIndex = () => {
    if (data) {
      // 애니메이션이 아직 끝나지 않았다면
      if (leaving) return;
      // 총 영화 개수에서 타이틀에 걸린 영화 1개 제외한 값
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIsNext(true);
      toggleLeaving();
      setIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }
  };

  // - prevIndex : index state 감소 함수
  const prevIndex = () => {
    if (data) {
      if (leaving) return;
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;

      toggleLeaving();
      setIndex(prev => (prev === 0 ? maxIndex : prev - 1));
      setIsNext(false);
    }
  };

  //index 값에 따라 6 단위의 배열로 잘라냄
  const resultsData = data?.results
    .slice(1)
    .slice(offset * index, offset * index + offset);

  return (
    <>
      {/* -- 슬라이드 영역 -- */}
      <H.Slider>
        <H.Slider_Title>{title}</H.Slider_Title>
        <AnimatePresence
          custom={isNext}
          initial={false}
          onExitComplete={toggleLeaving}
        >
          <H.Row
            key={index}
            variants={RowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={isNext}
            transition={{ type: "tween", duration: 1 }}
          >
            {resultsData &&
              resultsData.map((movie, index) => (
                <H.RowBox
                  onClick={() => onBoxClicked(movie.id)}
                  key={index + movie.id}
                  variants={BoxHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  bgphoto={makeImagePath(
                    movie.backdrop_path
                      ? movie.backdrop_path
                      : movie.poster_path
                      ? movie.poster_path
                      : "no image."
                  )}
                >
                  <H.RowBox_Info variants={infoVariants}>
                    <h4>{movie.title}</h4>
                  </H.RowBox_Info>
                </H.RowBox>
              ))}
          </H.Row>
          <H.prevBtn onClick={prevIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </H.prevBtn>
          <H.nextBtn onClick={nextIndex}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </H.nextBtn>
        </AnimatePresence>
      </H.Slider>

      {/* -- 오버레이 영역 -- */}
      {bigMovieMatch ? (
        <>
          <MovieDetail id={bigMovieMatch.params.movieId!} category={category} />
        </>
      ) : null}
    </>
  );
};

export default MovieSlider;
