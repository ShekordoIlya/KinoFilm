import style from "./Header.module.scss";
import { PropsWithChildren, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: PropsWithChildren<IModal>) => {
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
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.wrapperBtn}>
          <button className={style.closeBtn} onClick={onClose}>
            X
          </button>
        </div>

        <form onSubmit={formHandler}>
          <div className={style.emailWrapper}>
            <p className={style.emailInfo}>Введите адрес электронной почты:</p>
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
              //   value={registrationData.password}
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
              <a className={style.registrationLink} href={"/registrationPage"}>
                сюда
              </a>{" "}
              чтобы создать аккаунт.
            </p>
          </div>
        </form>
      </div>
      <div className={style.modalOverlay} onClick={onClose}></div>
    </div>,
    document.body
  );
};

export default Modal;
