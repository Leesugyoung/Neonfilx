import { useNavigate } from "react-router-dom";
import * as M from "../../styled-components/StyledModal";
import { makeImagePath } from "../../utils/utils";
import { ISearchResult } from "../apis/SearchApi";

interface Iprops {
  Sdata: ISearchResult;
}

function SearchSeries({ Sdata }: Iprops) {
  const navigate = useNavigate();

  // 영화 개봉날짜
  const sub_Openday = Sdata?.release_date.substring(0, 4);
  return (
    <>
      <M.Overlay
        variants={M.overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => navigate(-1)}
      />
      <M.Modal
        variants={M.modalVariants}
        initial="initial"
        animate="click"
        exit="exit"
      >
        <M.Modal_Poster
          style={{
            backgroundImage: `linear-gradient(to top, #181818, transparent), url(${
              Sdata && (Sdata.backdrop_path || Sdata.poster_path)
                ? makeImagePath(
                    Sdata.backdrop_path || Sdata.poster_path,
                    "w500"
                  )
                : "../../assets/Noimage.png"
            })`,
          }}
        />
        <M.Poster_prevBtn onClick={() => navigate(-1)}>✕</M.Poster_prevBtn>
        <M.Poster_Title>
          {Sdata?.name ? Sdata.name : Sdata?.title}
        </M.Poster_Title>
        <M.Search_OriginTitle>{Sdata?.original_title}</M.Search_OriginTitle>
        <M.Poster_infomation_top>
          <span>{sub_Openday}</span>
          <span>
            ⭐
            {Sdata?.vote_average
              ? (Sdata?.vote_average).toFixed(1)
              : "not vote"}
          </span>
        </M.Poster_infomation_top>
        <M.Poster_infomation_bottom>
          <M.Search_overview>
            {Sdata?.overview === "" ? "There is no overview." : Sdata?.overview}
          </M.Search_overview>
        </M.Poster_infomation_bottom>
      </M.Modal>
    </>
  );
}

export default SearchSeries;
