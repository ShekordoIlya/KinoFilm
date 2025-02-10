import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import FilmPage from "./Pages/Film/FilmPage";
import SearchingPage from "./Pages/SearchingPage/SearchingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="film/:kinopoiskId" element={<FilmPage />} />
          <Route path="film/searching" element={<SearchingPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
