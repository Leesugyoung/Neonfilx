import { useNavigate } from "react-router-dom";
import * as M from "../../styled-components/StyledModal";
import { IGetSearch } from "../apis/SearchApi";

interface Iprops {
  tv_Data: IGetSearch;
  m_Id: number;
}

function SearchSeries({ tv_Data, m_Id }: Iprops) {
  const navigate = useNavigate();
  const Seriesdetail = tv_Data?.results.find(item => item.id === m_Id);
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
        <M.Modal_Poster />
        <M.Poster_prevBtn onClick={() => navigate(-1)}>✕</M.Poster_prevBtn>

        <M.Poster_Title></M.Poster_Title>
      </M.Modal>
    </>
  );
}

export default SearchSeries;
