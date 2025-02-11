import style from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store/filmSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.searchFilms);
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTimeout(() => dispatch(setSearchQuery(value)), 1500);
    console.log(searchQuery);
  };
  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery == "") {
      alert("Введите название фильма в поле для поиска");
    } else {
      navigate("film/searching");
    }
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <p className={style.logo}>
          <a href="/">KinoFilm</a>
        </p>
        <form className={style.wrapper} onSubmit={handlerSubmit}>
          <input
            type={"text"}
            className={style.input}
            placeholder={"Введите название фильма"}
            // value={searchQuery}
            onChange={handlerInput}
          />
          <button type={"submit"} className={style.btnSearch}>
            Поиск
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
