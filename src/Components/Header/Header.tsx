import style from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setOpenClose } from "../../store/filmSearchSlice";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchQuery, openClose } = useSelector((state) => state.searchFilms);
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTimeout(() => dispatch(setSearchQuery(value)), 1500);
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
        <button
          onClick={() => {
            dispatch(setOpenClose(!openClose));
            console.log(openClose);
          }}
          type="button"
        >
          Регистрация/Авторизация
        </button>
        <Modal
          isOpen={openClose}
          onClose={() => {
            dispatch(setOpenClose(!openClose));
          }}
        >
          <div className={style.emailWrapper}>
            <p className={style.emailInfo}>Введите адрес электронной почты:</p>
            <input className={style.email} type="email" />
          </div>
          <div>
            <p>Введите пароль:</p>
            <input type="password" />
          </div>
        </Modal>
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
