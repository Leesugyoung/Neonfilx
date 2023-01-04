import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MovieDetail from "./Components/movies/MovieDetail";
import SearchDetail from "./Components/Search/SearchDetail";
import SeriesDetail from "./Components/Series/SeriesDetail";
import Movie from "./Routes/Movie";
import Search from "./Routes/Search";
import TvSeries from "./Routes/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movie />}>
          <Route path="movies/:movieId" element={<Movie />} />
        </Route>
        <Route path="/tv" element={<TvSeries />}>
          <Route path=":tv_id" element={<TvSeries />} />
        </Route>
        <Route path="/search" element={<Search />}>
          <Route path=":movieId" element={<SearchDetail id={"21115"} />} />
          <Route path=":tv_id" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
