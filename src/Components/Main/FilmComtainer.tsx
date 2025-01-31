import { useEffect } from "react";
import style from "./SectionFilm.module.scss";

const FilmContainer = () => {
  const path = "http://www.omdbapi.com/?apikey=177bfe1b";
  useEffect(() => {
    fetch(path)
      .then((result) => {
        result.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div className={style.container}></div>;
};

export default FilmContainer;
