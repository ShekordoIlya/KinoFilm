import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Film from "./Pages/Film/Film";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/film/:id" element={<Film />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
