import FilmContainer from "./FilmComtainer";
import style from "./SectionFilm.module.scss";

const SectionFilm = () => {
  return (
    <section className={style.section}>
      <FilmContainer />
    </section>
  );
};

export default SectionFilm;
