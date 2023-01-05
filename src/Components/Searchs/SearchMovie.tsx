import * as M from "../../styled-components/StyledModal";
import { useNavigate } from "react-router-dom";
import { IGetSearch } from "../apis/SearchApi";
import { makeImagePath } from "../../utils/utils";

interface Iprops {
  movie_Data: IGetSearch;
  m_Id: number;
}

function SearchMovie({ movie_Data, m_Id }: Iprops) {
  const navigate = useNavigate();
  const Moviedetail = movie_Data?.results.find(item => item.id === m_Id);

  // 영화 개봉날짜
  const sub_Openday = Moviedetail?.release_date.substring(0, 4);
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
              Moviedetail!.backdrop_path
                ? Moviedetail!.backdrop_path
                : Moviedetail!.poster_path,
              "w500"
            )})`,
          }}
        />
        <M.Poster_prevBtn onClick={() => navigate(-1)}>✕</M.Poster_prevBtn>
        <M.Poster_Title>
          {Moviedetail?.name ? Moviedetail.name : Moviedetail?.title}
        </M.Poster_Title>
        <M.Poster_infomation_top>
          <span>{sub_Openday}</span>
          <span>
            ⭐
            {Moviedetail?.vote_average
              ? (Moviedetail?.vote_average).toFixed(1)
              : "not vote"}
          </span>
        </M.Poster_infomation_top>
        <M.Poster_infomation_bottom>
          <M.Poster_overview>
            {Moviedetail?.overview === ""
              ? "There is no overview."
              : Moviedetail?.overview}
          </M.Poster_overview>
        </M.Poster_infomation_bottom>
      </M.Modal>
    </>
  );
}

export default SearchMovie;
