import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { URLSearchParams } from "url";
import { IGetDetail } from "../Components/apis/Mov_Ser_Api";
import { getSearchMovie, getSearchTv } from "../Components/apis/SearchApi";
import "react-native-url-polyfill/auto";

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data: movie_Data, isLoading: movie_Loading } = useQuery(
    ["search", "movie"],
    () => getSearchMovie(keyword!),
    { enabled: !!keyword }
  );
  const { data: tv_Data, isLoading: tv_Loading } = useQuery(
    ["search", "tv"],
    () => getSearchTv(keyword!),
    { enabled: !!keyword }
  );
  return null;
}

export default Search;
