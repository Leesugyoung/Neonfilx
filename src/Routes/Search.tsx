import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as H from "../styled-components/StyledHome";

import {
  getSearchMovie,
  getSearchTv,
  IGetSearchKey,
} from "../Components/apis/SearchApi";
import styled from "styled-components";
import { makeImagePath } from "../utils/utils";
import { useEffect } from "react";
import MovieSlider from "../Components/movies/MovieSlider";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin-top: 80px;
  height: 40vh;
`;

const Notingdiv = styled.div`
  padding-top: 250px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
`;

const Searching = styled.div`
  padding: 60px;
`;

const Title = styled.div`
  font-size: 25px;
  color: #808080;
  margin-bottom: 20px;
  span {
    color: ${props => props.theme.white.lighter};
  }
`;

export const RowBox_Info = styled(motion.div)`
  // opacity: 0;
  padding: 10px;
  background-color: rgba(28, 28, 28, 0.6);
  position: relative;
  width: 100%;
  h4 {
    text-align: center;
    font-size: 13px;
  }
`;

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

function Search() {
  // Header에서 보낸 query-argument
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  // keyword가 존재할 때만 검색어 API 가져오기
  const { data: movie_Data, isLoading: movie_Loading } =
    useQuery<IGetSearchKey>(
      ["search", "movie"],
      () => getSearchMovie(keyword!),
      { enabled: !!keyword }
    );
  const { data: tv_Data, isLoading: tv_Loading } = useQuery<IGetSearchKey>(
    ["search", "tv"],
    () => getSearchTv(keyword!),
    { enabled: !!keyword }
  );

  // console.log(tv_Data, movie_Data);
  return (
    <Wrapper>
      <Helmet>
        <title>Neonfilx - Search</title>
      </Helmet>
      {keyword === null ? (
        <Notingdiv>
          <div>No search results found.</div>
          <div>
            Click the magnifying glass icon in the upper right to search!
          </div>
        </Notingdiv>
      ) : (
        // 검색 후
        <Searching>
          <Title>
            Result of searching with <span>{keyword}</span>
          </Title>
          <H.Row>
            {movie_Data?.results.map(data => (
              <H.RowBox
                variants={BoxHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "tween" }}
                bgphoto={makeImagePath(data.backdrop_path + "")}
                key={data.id}
              >
                <H.RowBox_Info variants={infoVariants}>
                  <h4>{data.title ? data.title : data.name}</h4>
                </H.RowBox_Info>
              </H.RowBox>
            ))}
            {tv_Data?.results.map(data => (
              <H.RowBox
                variants={BoxHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={{ type: "tween" }}
                bgphoto={makeImagePath(data.backdrop_path + "")}
                key={data.id}
              >
                <RowBox_Info variants={infoVariants}>
                  <h4>{data.title ? data.title : data.name}</h4>
                </RowBox_Info>
              </H.RowBox>
            ))}
          </H.Row>
        </Searching>
      )}
    </Wrapper>
  );
}

export default Search;
