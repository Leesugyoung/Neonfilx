import styled from "styled-components";
import { motion } from "framer-motion";

// ----------Variants----
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.4 },
  exit: { opacity: 0 },
};

export const modalVariants = {
  initial: { opacity: 0 },
  click: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};
// -----------------------

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
  height: 400px;
  background-position: center center;
  background-size: cover;
`;

export const Poster_prevBtn = styled.div`
  color: ${props => props.theme.white.darker};
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  background-color: ${props => props.theme.black.darker};
`;

export const Poster_Title = styled.div`
  letter-spacing: 1px;
  width: 95%;
  height: 70px;
  color: ${props => props.theme.white.lighter};
  padding-left: 50px;
  font-size: 50px;
  font-weight: 700;
  position: relative;
  top: -90px;
  text-shadow: 1px 1px 2px #a8a8a8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const Poster_infomation_top = styled.div`
  // 1.개봉년도  2.장르  3.평균 평점 리스트
  top: -50px;
  font-size: 18px;
  padding-left: 50px;
  position: relative;
  font-weight: 500;
  font-weight: 18px;
  span:first-child {
    color: #46d369;
    border: 1px solid ${props => props.theme.white.darker};
    padding: 0.5px 4px;
    border-radius: 3px;
    margin-right: 10px;
  }
  p {
    display: inline;
  }
  span:last-child {
    margin-left: 10px;
  }
`;

export const p_dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 3px;
  color: white;
`;

export const Poster_infomation_bottom = styled.div`
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -20px;
`;

export const Poster_overview = styled.div`
  width: 60%;
  font-size: 16px;
  color: ${props => props.theme.white.lighter};
  background-color: ${props => props.theme.black.darker};
  padding-right: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
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

// 검색페이지 전용
export const Search_overview = styled.div`
  width: 100%;
  font-size: 16px;
  color: ${props => props.theme.white.lighter};
  background-color: ${props => props.theme.black.darker};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export const Search_OriginTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-left: 50px;
  position: relative;
  top: -90px;
  letter-spacing: 1px;
  color: #7a7a7a;
`;
