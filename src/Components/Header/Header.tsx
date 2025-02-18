import style from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setOpenClose } from "../../store/filmSearchSlice";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const { registrationData, setRegistrationData }: any = useState(null);
  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationData);
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
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
          className={style.regAuthBtn}
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
          <form onSubmit={formHandler}>
            <div className={style.emailWrapper}>
              <p className={style.emailInfo}>
                Введите адрес электронной почты:
              </p>
              <input
                //   value={registrationData.email}
                name="email"
                onChange={inputHandler}
                className={style.email}
                type="email"
              />
            </div>
            <div className={style.passWrapper}>
              <p className={style.passInfo}>Введите пароль:</p>
              <input
                // value={registrationData.password}
                onChange={inputHandler}
                name="password"
                className={style.pass}
                type="password"
              />
            </div>
            <div className={style.signInBtnWrapper}>
              <button type="submit" className={style.signInBtn}>
                Войти
              </button>
            </div>
            <div className={style.registrationWrapper}>
              <p>
                Нет аккаунта? Нажмите{" "}
                <a
                  className={style.registrationLink}
                  href={"/registrationPage"}
                >
                  сюда
                </a>{" "}
                чтобы создать аккаунт.
              </p>
            </div>
          </form>
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
