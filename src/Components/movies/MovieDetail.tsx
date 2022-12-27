import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  getMovieCredit,
  getMovieDetail,
  IGetMovieCredit,
  IGetMovieDetail,
} from "../../api";
import * as H from "../../styled-components/StyledHome";
import { makeImagePath } from "../../utils/utils";

// ----------Variants----
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7 },
  exit: { opacity: 0 },
};
// -----------------------

interface IDetailProps {
  category: string;
  id: string;
}

function MovieDetail({ category, id }: IDetailProps) {
  // movie detail API
  const { data: detailData, isLoading: detailLoading } =
    useQuery<IGetMovieDetail>(["movie", `${category}_detail`], () =>
      getMovieDetail(id)
    );

  // movie  API
  const { data: creditData, isLoading: creditLoading } =
    useQuery<IGetMovieCredit>(["movie", `${category}_credit`], () =>
      getMovieCredit(id)
    );

  // 오버레이 클릭 시 뒤로가기 기능
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);

  return (
    <AnimatePresence>
      {detailLoading && creditLoading ? (
        <>
          <H.Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onOverlayClick}
          />
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default MovieDetail;
