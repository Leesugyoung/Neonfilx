const API_KEY = "177e5294830f7c9d7f647f132d2bc963";
const BASE_PATH = "https://api.themoviedb.org/3";

interface ISearchResult {
  id: number;
  name?: string;
  title?: string;
  backdrop_path: string;
  poster_path: string;
}

export interface IGetSearchKey {
  page: number;
  results: ISearchResult[];
  total_pages: number;
  total_results: number;
  dates: string;
}

// -------- Search movie
export function getSearchMovie(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1`
  ).then(response => response.json());
}

// -------- Search Tv
export function getSearchTv(keyword: string) {
  return fetch(
    `${BASE_PATH}/search/tv?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
  ).then(response => response.json());
}
