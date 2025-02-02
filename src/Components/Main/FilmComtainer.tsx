import { useEffect } from "react";
import style from "./SectionFilm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilms, setPage } from "../../store/filmSliceRTK";

const FilmContainer = () => {
  const dispatch = useDispatch();
  const { films, currentPage, itemsPerPage, totalItems, totalPages } =
    useSelector((state: any) => state.filmsStore);

  useEffect(() => {
    dispatch(FetchFilms({ currPage: currentPage }));
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  console.log(films, "its from film");
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          className={style.currenPage}
          onClick={() => {
            handlePageChange(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <>
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
      <ul className={style.renderPagesWrapper}>{renderPageNumbers()}</ul>
    </>
  );
};

export default FilmContainer;
