import { useDispatch, useSelector } from "react-redux";
import style from "./film.module.scss";
import { useEffect } from "react";
import { fetchFilm } from "../../store/filmPageSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FetchFilms } from "../../store/filmSliceRTK";

const Film = () => {
  const { id, filmName, poster } = useSelector((state): any => state.oneFilm);
  const dispatch = useDispatch();
  const { kinopoiskId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchFilm());
  }, []);
  console.log(id, "PARAMS");
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
        <img src={poster} alt="" />
      </picture>
    </div>
  );
};
export default Film;
