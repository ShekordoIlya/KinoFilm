import { useDispatch, useSelector } from "react-redux";
import style from "./searchingPage.module.scss";
import { useEffect } from "react";
import { FetchSearchFilm, setPage } from "../../store/filmSearchSlice";
import { useNavigate } from "react-router-dom";

const SearchingPage = () => {
  const dispatch = useDispatch();
  const {
    films,
    searchQuery,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
  } = useSelector((state) => state.searchFilms);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(FetchSearchFilm({ searchQuery, currPage: currentPage }));
  }, [searchQuery, currentPage]);

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
        <div className={style.container}>
          {films.map((film: any) => {
            return (
              <picture
                onClick={() => {
                  navigate(`/film/${film.filmId}`);
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
              onClick={() => handlePrevious()}
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
                handleNext();
              }}
              disabled={currentPage === totalPages}
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

export default SearchingPage;
