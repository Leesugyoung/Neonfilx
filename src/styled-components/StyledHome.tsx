import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ---------- 배너영역
export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
    ),
    url(${props => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 18px;
  font-weight: 400;
  width: 45%;
  text-shadow: 1px 1px 4px black;
`;

export const PlayBtn = styled.p`
  width: 130px;
  height: 40px;
  background-color: ${props => props.theme.white.lighter};
  font-size: 20px;
  color: ${props => props.theme.black.darker};
  border-radius: 5px;
  margin-right: 10px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  svg {
    width: 12%;
    margin-right: 7px;
  }
`;

export const InfoBtn = styled.p`
  width: 170px;
  height: 40px;
  background-color: rgba(75, 75, 75, 0.8);
  font-size: 20px;
  color: ${props => props.theme.white.lighter};
  line-height: 40px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

// ---------- 슬라이드 영역
export const Slider = styled.div`
  position: relative;
  top: -80px;
`;

export const SliderTitle = styled.div`
  font-size: 20px;
  color: ${props => props.theme.white.darker};
  font-weight: 500;
  margin-left: 60px;
  margin-bottom: 20px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const RowBox = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 130px;
  border-radius: 3px;
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  // 첫번째랑 마지막 포스터 scale 1.3 될때 잘리지않게
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  opacity: 0;
  padding: 10px;
  background-color: rgb(28, 28, 28);
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 13px;
  }
`;

// ---------- 클릭 오버레이 영역
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BigMovie = styled(motion.div)`
  position: fixed;
  width: 55vw;
  height: 90vh;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props => props.theme.black.darker};
  border-radius: 5px;
  overflow: hidden;
  border-radius: 5px;
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 350px;
`;

export const BigTitle = styled.h3`
  color: ${props => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  font-weight: 700;
  position: relative;
  top: -80px;
`;

export const BigOverview = styled.p`
  font-size: 16px;
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${props => props.theme.white.lighter};
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
