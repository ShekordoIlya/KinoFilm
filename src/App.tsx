import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import FilmPage from "./Pages/Film/FilmPage";
import SearchingPage from "./Pages/SearchingPage/SearchingPage";
import FilterPage from "./Pages/FilterPage/FilterPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import ActivatePage from "./Pages/Activate/ActivatePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="film/:kinopoiskId" element={<FilmPage />} />
          <Route path="film/searching" element={<SearchingPage />} />
          <Route path="film/filter" element={<FilterPage />} />
          <Route path="registrationPage" element={<RegistrationPage />} />
          <Route path="activatePage/:uid/:token" element={<ActivatePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
