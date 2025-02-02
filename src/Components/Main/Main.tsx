import style from "./Main.module.scss";
import SectionFilm from "./SectionFilm";
import TopButton from "./TopButton";

const Main = () => {
  return (
    <main className={style.main}>
      <TopButton />
      <SectionFilm />
    </main>
  );
};
export default Main;
