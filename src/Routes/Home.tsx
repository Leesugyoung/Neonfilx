import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useWindowDimensions from "../Components/useWindowDimensions.tsx";

const Wrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ),
    url(${props => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -90px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const RowBox = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 130px;
  border-radius: 3px;
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const offset = 6;
// 한번에 보여주고싶은 영화의 개수

function Home() {
  const width = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
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
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loaidng...</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            {/* 만약 backdrop_path 가 존재하지 않을 경우 ""를 반환 */}
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {/* → exit 이 끝났을때 toggleLeaving을 호출 */}
              <Row
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
                    <RowBox
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    />
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
