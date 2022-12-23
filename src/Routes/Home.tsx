import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import * as H from "../styled-components/StyledHome";
import MovieSlider from "../Components/MovieSlider";

function Home() {
  // now playing API
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <H.Wrapper>
      {isLoading ? (
        <H.Loader>Loaidng...</H.Loader>
      ) : (
        <>
          {/* -- 배너 영역 --  */}
          <H.Banner
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <H.Title_and_Overview>
              <H.Title>{data?.results[0].title}</H.Title>
              <H.Overview>{data?.results[0].overview}</H.Overview>
              <H.Btn_Container>
                <H.PlayBtn>▶ Play</H.PlayBtn>
                <H.InfoBtn> ⓘ Information</H.InfoBtn>
              </H.Btn_Container>
            </H.Title_and_Overview>
          </H.Banner>
          {/* Now Playing */}
          <MovieSlider />
        </>
      )}
    </H.Wrapper>
  );
}

export default Home;
