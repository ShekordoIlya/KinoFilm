import { useDispatch, useSelector } from "react-redux";
import style from "./film.module.scss";
import { useEffect } from "react";
import { fetchFilm } from "../../store/filmPageSlice";
import { useNavigate, useParams } from "react-router-dom";

const Film = () => {
  const { film, load } = useSelector((state: any): any => state.oneFilm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { kinopoiskId }: any = useParams();
  useEffect(() => {
    dispatch(fetchFilm({ kinopoiskId }));
  }, []);

  if (!load) {
    navigate("/notFound");
  }
  return (
    <div className={style.filmbcg}>
      <button
        className={style.returnbtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
      <section className={style.section}>
        <main className={style.container}>
          <picture className={style.picture}>
            <img
              className={style.image}
              src={film.posterUrlPreview}
              alt={film.nameRu}
            />
          </picture>
          <div className={style.wrapeprInfo}>
            <h3 className={style.nameFilm}>{film.nameRu}</h3>
            <p>Рейтинг зрителей: {film.ratingGoodReview}</p>
            <p>Рейтинг на Кинопоиске: {film.ratingKinopoisk}</p>
            <p>Год выхода в прокат: {film.year}</p>
          </div>
        </main>
        <aside className={style.description}>
          {film.description == null ? film.shortDescription : film.description}
        </aside>
        <div className={style.redirectbtnWrapper}>
          <button className={style.redirectbtn} type="button">
            <a target="blank" href={film.webUrl}>
              Перейти к просмотру
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Film;
