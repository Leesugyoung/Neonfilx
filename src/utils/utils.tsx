// import * as NoImage from "../assets/images";

/** 이미지 경로 만들어주는 함수 */
export function makeImagePath(id: string, format?: string) {
  if (id === "" || id === null || id === undefined) {
    return;
  } else {
    return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
  }
}
