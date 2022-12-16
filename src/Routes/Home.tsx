import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  top: -80px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;

const RowBox = styled(motion.div)`
  background-color: white;
  height: 130px;
  border-radius: 3px;
  color: red;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth - 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth,
  },
};

function Home() {
  const [index, setIndex] = useState(0);
  const incraseIndex = () => setIndex(prev => prev + 1);
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
            <AnimatePresence>
              {/* → Row의 key가 변경되면서 기존 Row가 파괴되며 동작 */}
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 4 }}
                key={index}
              >
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <RowBox key={i}>{i}</RowBox>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}{" "}
    </Wrapper>
  );
}

export default Home;
