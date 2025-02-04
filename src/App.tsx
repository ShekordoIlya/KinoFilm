import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
