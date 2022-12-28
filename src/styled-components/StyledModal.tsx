import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Modal = styled(motion.div)`
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
  z-index: 999 !important; // 최상위, z-index : 998 - header 영역
`;

export const Modal_Poster = styled.div`
  width: 100%;
  background-position: center center;
  background-size: cover;
  height: 400px;
`;

export const Poster_Title = styled.h3`
  color: ${props => props.theme.white.lighter};
  padding-bottom: 30px;
  padding-left: 50px;
  font-size: 50px;
  font-weight: 700;
  position: relative;
  top: -80px;
`;

export const Poster_infomation_top = styled.div`
  // 1.개봉년도  2.장르  3.평균 평점 리스트
  top: -60px;
  font-size: 18px;
  padding-left: 50px;
  position: relative;
  font-weight: 500;
  font-weight: 18px;
  span {
    margin-right: 10px;
  }
  span:first-child {
    color: #46d369;
    border: 1px solid ${props => props.theme.white.darker};
    padding: 1px 5px;
    border-radius: 3px;
  }
`;

export const Poster_infomation_bottom = styled.div`
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -30px;
`;

export const Poster_overview = styled.div`
  width: 60%;
  font-size: 16px;
  color: ${props => props.theme.white.lighter};
  background-color: ${props => props.theme.black.darker};
  padding-right: 50px;
`;

export const Poster_acter_and_director = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  font-size: 16px;
  color: ${props => props.theme.white.lighter};
`;

export const Poster_actor = styled.div`
  margin-bottom: 10px;
  div {
    display: inline;
  }
  span {
    color: #777777;
    margin-right: 5px;
  }
`;
export const Poster_director = styled.div`
  span {
    color: #777777;
    margin-right: 5px;
  }
`;
