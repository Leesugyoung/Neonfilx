import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ---배너 영역---

export const Banner = styled.div<{ bgphoto: string }>`
  // 배너 이미지
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0.9%,
      rgba(0, 0, 0, 0) 10%
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    linear-gradient(to top, rgba(20, 20, 20, 1) 4%, rgba(0, 0, 0, 0) 13%),
    url(${props => props.bgphoto});
  background-size: cover;
`;

export const Title_and_Overview = styled.div`
  // 타이틀, 설명 container
  width: 50vw;
  height: 50vh;
  margin-top: 30vh;
  margin-left: 60px;
`;

export const Title = styled.h2`
  // 영화제목
  font-size: 4vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 1px 2px 3px rgb(0, 0, 0, 0.6);
`;

export const Overview = styled.p`
  // 영화 설명
  font-size: 1.3vw;
  font-weight: 400;
  width: 60%;
  text-shadow: 1px 2px 4px rgb(0, 0, 0, 0.7);
  margin-bottom: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const Btn_Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const PlayBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 45px;
  background-color: ${props => props.theme.white.lighter};
  font-size: 1.3vw;
  color: ${props => props.theme.black.darker};
  border-radius: 5px;
  text-align: center;
  margin-right: 15px;
  svg {
    margin-right: 5px;
  }
  cursor: pointer;
  :hover {
    background-color: rgba(238, 238, 238, 0.6);
  }
`;

export const InfoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11vw;
  height: 45px;
  background-color: rgba(75, 75, 75, 0.8);
  font-size: 1.3vw;
  color: ${props => props.theme.white.lighter};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgba(75, 75, 75, 0.5);
  }
`;

// ---------- 슬라이드 영역
export const Slider = styled.div`
  padding: 0 60px;
  height: 200px;
  position: relative;
  top: -100px;
  margin-bottom: 30px;
`;

export const Slider_Title = styled.h2`
  color: ${props => props.theme.white.lighter};
  font-size: 26px;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3px;
  width: 97%;
  position: absolute;
  height: 130px;
`;

export const RowBox = styled(motion.div)<{ bgphoto: string }>`
  height: 135px;
  margin-right: 5px;
  border-radius: 3px;
  background-image: url(${props => props.bgphoto});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  // 첫번째랑 마지막 포스터 scale 1.3 될때 잘리지않게
  &:first-child {
    transform-origin: center left !important;
  }
  &:last-child {
    transform-origin: center right !important;
  }
`;

export const RowBox_Info = styled(motion.div)`
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

// ---------- 슬라이드 영역 : next,prev 버튼
export const prevBtn = styled.div`
  width: 3.5vh;
  height: 3.5vh;
  top: 13vh;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
`;

export const nextBtn = styled.div`
  width: 3.5vh;
  height: 3.5vh;
  top: 13vh;
  right: 5px;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
`;
