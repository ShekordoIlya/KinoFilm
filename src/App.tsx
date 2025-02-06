import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import FilmPage from "./Pages/Film/FilmPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/film/:kinopoiskId" element={<FilmPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
