import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Loader = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ---배너 영역---

export const Banner = styled.div<{ bgPhoto: string }>`
  // 배너 이미지
  height: 95vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    ),
    linear-gradient(to top, rgba(0, 0, 0, 1) 0.2%, rgba(0, 0, 0, 0) 6%),
    url(${props => props.bgPhoto});
  background-size: cover;
`;

export const Title_and_Overview = styled.div`
  // 타이틀, 설명 container
  width: 50vw;
  height: 50vh;
  margin-top: 270px;
  margin-left: 60px;
`;

export const Title = styled.h2`
  // 영화제목
  font-size: 3.5vw;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgb(0, 0, 0, 0.6);
`;

export const Overview = styled.p`
  // 영화 설명
  font-size: 1.3vw;
  font-weight: 400;
  width: 70%;
  text-shadow: 1px 1px 3px rgb(0, 0, 0, 0.7);
  margin-bottom: 20px;
`;

export const Btn_Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

export const PlayBtn = styled.div`
  width: 8vw;
  height: 6vh;
  background-color: ${props => props.theme.white.lighter};
  font-size: 1.3vw;
  color: ${props => props.theme.black.darker};
  border-radius: 5px;
  text-align: center;
  line-height: 6vh;
  margin-right: 15px;
  cursor: pointer;
  :hover {
    background-color: rgba(238, 238, 238, 0.6);
  }
`;

export const InfoBtn = styled.div`
  width: 11vw;
  height: 6vh;
  background-color: rgba(75, 75, 75, 0.8);
  font-size: 1.3vw;
  color: ${props => props.theme.white.lighter};
  border-radius: 5px;
  text-align: center;
  line-height: 6vh;
  cursor: pointer;
  :hover {
    background-color: rgba(75, 75, 75, 0.5);
  }
`;

// ---------- 슬라이드 영역
export const Slider = styled.div`
  padding: 0 60px;
  width: 100%;
  position: absolute;
  top: 85vh;
`;

export const Slider_Title = styled.div`
  color: ${props => props.theme.white.lighter};
  font-size: 2vw;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const Row = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  width: 96.5%;
  height: 130px;
  position: absolute;
`;

export const RowBox = styled(motion.li)<{ bgPhoto: string }>`
  height: 130px;
  margin-right: 5px;
  width: 90%;
  border-radius: 3px;
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-position: center center;
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
  background-position: center center;
  background-size: cover;
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

// old css
/* export const Wrapper = styled.div`
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
`;

export const Loader = styled.div`
  height: 20%;
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
  z-index: 1;
`;

export const Title_and_Overview = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  position: relative;
  top: 150px;
  flex-direction: column;
  justify-content: center;
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
  margin-bottom: 10px;
`;

export const PlayBtn = styled.p`
  width: 130px;
  height: 45px;
  background-color: ${props => props.theme.white.lighter};
  font-size: 20px;
  color: ${props => props.theme.black.darker};
  border-radius: 5px;
  margin-right: 10px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
  svg {
    width: 12%;
    margin-right: 7px;
  }
`;

export const InfoBtn = styled.p`
  width: 170px;
  height: 45px;
  background-color: rgba(75, 75, 75, 0.8);
  font-size: 20px;
  color: ${props => props.theme.white.lighter};
  line-height: 45px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

// ---------- 슬라이드 영역
export const Slider = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

export const RowBox = styled(motion.div)<{ bgPhoto: string }>`
  background-color: black;
  height: 130px;
  border-radius: 3px;
  background-image: url(${props => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
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
 */
