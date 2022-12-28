const API_KEY = "177e5294830f7c9d7f647f132d2bc963";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  release_date: string;
  poster_path: string;
  original_title: string;
  title?: string;
  vote_average: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetMovieDetail {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  tagline: string;
  release_date: string;
}

export interface IGetMovieCredit {
  id: number;
  cast: [
    {
      id: number;
      name: string;
      original_name: string;
      character: string;
      profile_path: string;
    }
  ];
  crew: [
    {
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      profile_path: string;
    }
  ];
}

// Movies
export function getMovies(category: string) {
  return fetch(
    `${BASE_PATH}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => response.json());
}

export async function getMovieDetail(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(response => response.json());
}

export async function getMovieCredit(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => response.json());
}
