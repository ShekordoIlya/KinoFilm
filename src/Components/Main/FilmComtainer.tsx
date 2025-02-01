import { useEffect } from "react";
import style from "./SectionFilm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilms } from "../../store/filmSliceRTK";

const FilmContainer = () => {
  const dispatch = useDispatch();
  const { films } = useSelector((state: any) => state.filmsStore);

  useEffect(() => {
    dispatch(FetchFilms());
  }, []);

  console.log("its films from selector", films);
  return (
    <div className={style.container}>
      {films.map((oneFilm: any) => {
        return (
          <picture key={oneFilm.kinopoiskId} className={style.filmsWrapper}>
            <img
              className={style.filmsImage}
              src={oneFilm.posterUrl}
              alt="film"
            />
          </picture>
        );
      })}
    </div>
  );
};

export default FilmContainer;
