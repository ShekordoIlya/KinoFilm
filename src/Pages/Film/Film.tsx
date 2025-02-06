import { useDispatch, useSelector } from "react-redux";
import style from "./film.module.scss";
import { useEffect } from "react";
import { fetchFilm } from "../../store/filmPageSlice";
import { useNavigate, useParams } from "react-router-dom";

const Film = () => {
  const { film } = useSelector((state): any => state.oneFilm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { kinopoiskId } = useParams();
  useEffect(() => {
    dispatch(fetchFilm({ kinopoiskId }));
  }, [kinopoiskId]);
  console.log(film, "ITS FILM");
  return (
    <div className={style.filmbcg}>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
      <picture>
        <img src="#" alt="" />
      </picture>
    </div>
  );
};
export default Film;
