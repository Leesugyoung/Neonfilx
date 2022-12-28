import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import * as H from "../styled-components/StyledHome";
import MovieSlider from "../Components/movies/MovieSlider";
import Banner from "../Components/Banner";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Home() {
  // Nowplaying API
  const { data: now_data, isLoading: now_Loading } = useQuery<IGetMoviesResult>(
    ["movies", "now"],
    () => getMovies("now_playing")
  );

  // Popular(Trending Now) API
  const { data: pop_data, isLoading: pop_Loading } = useQuery<IGetMoviesResult>(
    ["movies", "popular"],
    () => getMovies("popular")
  );

  // Top Rated(High Rated) API
  const { data: top_data, isLoading: top_Loading } = useQuery<IGetMoviesResult>(
    ["movies", "top"],
    () => getMovies("top_rated")
  );

  // Top Rated(High Rated) API
  const { data: up_data, isLoading: up_Loading } = useQuery<IGetMoviesResult>(
    ["movies", "upcoming"],
    () => getMovies("upcoming")
  );

  return (
    <H.Wrapper>
      {now_Loading && pop_Loading && top_Loading && up_Loading ? (
        <H.Loader>Loaidng...</H.Loader>
      ) : (
        <>
          <Helmet>
            <title> Neonfilx </title>
          </Helmet>
          {/* -- 배너 영역 --  */}
          <Banner data={now_data} />
          {/* -- 슬라이드 영역 -- */}
          <MovieSlider
            category="now_playing"
            title="Now Playing"
            data={now_data}
          />
          <MovieSlider
            category="popular"
            title="Trending Now"
            data={pop_data}
          />
          <MovieSlider
            category="top_rated"
            title="High Rated"
            data={top_data}
          />
          <MovieSlider category="upcoming" title="Coming soon" data={up_data} />
        </>
      )}
    </H.Wrapper>
  );
}

export default Home;
