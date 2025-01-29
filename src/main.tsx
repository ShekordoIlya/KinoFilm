import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

createRoot(document.getElementById("root")!).render(
  <>
    <Header />
    <Main />
  </>
);
