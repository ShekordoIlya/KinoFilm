import FilterField from "../Filter/FilterField";
import style from "./Main.module.scss";
import SectionFilm from "./SectionFilm";

const Main = () => {
  return (
    <main className={style.main}>
      <FilterField />
      <SectionFilm />
    </main>
  );
};
export default Main;
