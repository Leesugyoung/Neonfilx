import { IGetMoviesResult } from "../api";
import * as H from "../styled-components/StyledHome";
import { makeImagePath } from "../utils/utils";

interface IBannerProps {
  data: IGetMoviesResult | undefined;
}

const Banner: React.FC<IBannerProps> = ({ data }) => {
  return (
    <>
      <H.Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
        <H.Title_and_Overview>
          <H.Title>{data?.results[0].title}</H.Title>
          <H.Overview>{data?.results[0].overview}</H.Overview>
          <H.Btn_Container>
            <H.PlayBtn>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
              Play
            </H.PlayBtn>
            <H.InfoBtn> ⓘ Information</H.InfoBtn>
          </H.Btn_Container>
        </H.Title_and_Overview>
      </H.Banner>
    </>
  );
};

export default Banner;
