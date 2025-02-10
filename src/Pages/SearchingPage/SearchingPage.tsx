import { useDispatch, useSelector } from "react-redux";
import style from "./searchingPage.module.scss";
import { useEffect } from "react";
import { FetchSearchFilm } from "../../store/filmSearchSlice";

const SearchingPage = () => {
  const dispatch = useDispatch();
  const { films, searchQuery } = useSelector((state) => state.searchFilms);
  useEffect(() => {
    dispatch(FetchSearchFilm({ searchQuery }));
  }, [searchQuery]);
  console.log(films);
  return (
    <main className={style.container}>
      {films.map((film) => {
        return <p>{film.nameRu}</p>;
      })}
    </main>
  );
};

export default SearchingPage;
