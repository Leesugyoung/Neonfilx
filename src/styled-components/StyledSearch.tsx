import styled from "styled-components";
import { motion } from "framer-motion";

// ----- Variants
export const BoxHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.3,
    y: -20,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
    },
  },
};

export const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      type: "tween",
    },
  },
};

export const Wrapper = styled.div`
  margin-top: 80px;
  height: 40vh;
`;

export const Notingdiv = styled.div`
  padding-top: 250px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #808080;
  margin-bottom: 50px;
  span {
    color: ${props => props.theme.white.lighter};
  }
`;

export const Searching = styled.div`
  padding: 60px;
`;

export const Searching_Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 500;
  color: ${props => props.theme.white.darker};
  span {
    font-size: 25px;
    margin-right: 3px;
  }
`;

export const SearchRow_movie = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  margin-bottom: 60px;
`;

export const SearchRow_series = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  margin-bottom: 40px;
`;

export const RowBox = styled(motion.div)<{ bgphoto: string }>`
  height: 135px;
  border-radius: 3px;
  background-image: url(${props => props.bgphoto});
  background-color: ${props =>
    props.theme.black.lighter}; // bgphoto 가 없을 경우 띄워지는
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  // 글자
  font-size: 10px;
  text-align: center;
  color: white;
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

export const Modal_Poster = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props =>
    props.theme.black.lighter}; // bgphoto 가 없을 경우 띄워지는
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
