import { useDispatch, useSelector } from "react-redux";
import style from "./filterPage.module.scss";
import { useEffect } from "react";
import { FetchFilmFilter, setPage } from "../../store/filmFilterSlice";
import { useNavigate } from "react-router-dom";

const FilterPage = () => {
  const {
    films,
    yearFrom,
    yearTo,
    minRating,
    maxRating,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    loading,
  } = useSelector((state) => state.filterFilms);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      FetchFilmFilter({
        yearFrom,
        yearTo,
        minRating,
        maxRating,
        currPage: currentPage,
      })
    );
  }, [yearFrom, yearTo, minRating, maxRating, currentPage]);
  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };
  const handleNext = () => {
    dispatch(setPage(currentPage + 1));
  };
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          style={{ color: i === currentPage ? "red" : "white" }}
          className={style.currenPage}
          onClick={() => {
            handlePageChange(i);
          }}
        >
          {i}
        </li>
      );
      if (i == 20) {
        break;
      }
    }
    return pages;
  };

  console.log(
    `its all films with rating ${yearFrom}, ${yearTo}, ${minRating}, ${maxRating}`,
    films
  );

  if (loading) {
    return (
      <main className={style.main}>
        <button
          className={style.returnbtn}
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </button>
        <div className={style.section}>
          <div className={style.waiting}>Пожалуйста подождите...</div>
        </div>
      </main>
    );
  }
  console.log(totalPages);

  return (
    <main className={style.main}>
      <button
        className={style.returnbtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
      <div className={style.section}>
        <p className={style.filterInfo}>
          Фильмы отфильтрованы по годам, с {yearFrom} по {yearTo}, и по
          рейтингу: от {minRating} до {maxRating}
        </p>
        <div className={style.container}>
          {films.map((film: any) => {
            return (
              <picture
                onClick={() => {
                  navigate(`/film/${film.kinopoiskId}`);
                }}
                key={film.filmId}
                className={style.filmsWrapper}
              >
                <img
                  className={style.filmsImage}
                  src={film.posterUrl}
                  alt={film.nameEn}
                />
              </picture>
            );
          })}
        </div>
        <ul className={style.renderPagesWrapper}>
          {
            <button
              className={style.prevNextButton}
              onClick={() => {
                handlePrevious;
              }}
              disabled={currentPage === 1}
              type="button"
            >
              {"<"}
            </button>
          }
          {renderPageNumbers()}
          {
            <button
              className={style.prevNextButton}
              onClick={() => {
                handleNext;
              }}
              disabled={currentPage === 20}
              type="button"
            >
              {">"}
            </button>
          }
        </ul>
      </div>
    </main>
  );
};

export default FilterPage;
