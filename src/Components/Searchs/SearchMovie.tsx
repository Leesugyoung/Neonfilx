import * as M from "../../styled-components/StyledModal";
import { useNavigate } from "react-router-dom";
import { ISearchResult } from "../apis/SearchApi";
import { makeImagePath } from "../../utils/utils";

interface Iprops {
  Mdata: ISearchResult;
}

function SearchMovie({ Mdata }: Iprops) {
  const navigate = useNavigate();
  // 클릭한 영화의 id 와 영화데이터 안의 id 가 같은 데이터를 찾아옴

  // 영화 개봉날짜
  const sub_Openday = Mdata?.release_date.substring(0, 4);
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
            backgroundImage: ` linear-gradient(to top, #181818, transparent), url(${makeImagePath(
              Mdata!.backdrop_path ? Mdata!.backdrop_path : Mdata!.poster_path,
              "w500"
            )})`,
          }}
        />
        <M.Poster_prevBtn onClick={() => navigate(-1)}>✕</M.Poster_prevBtn>
        <M.Poster_Title>
          {Mdata?.name ? Mdata.name : Mdata?.title}
        </M.Poster_Title>
        <M.Search_OriginTitle>{Mdata?.original_title}</M.Search_OriginTitle>
        <M.Poster_infomation_top>
          <span>{sub_Openday}</span>
          <span>
            ⭐
            {Mdata?.vote_average
              ? (Mdata?.vote_average).toFixed(1)
              : "not vote"}
          </span>
        </M.Poster_infomation_top>
        <M.Poster_infomation_bottom>
          <M.Search_overview>
            {Mdata?.overview === "" ? "There is no overview." : Mdata?.overview}
          </M.Search_overview>
        </M.Poster_infomation_bottom>
      </M.Modal>
    </>
  );
}

export default SearchMovie;
