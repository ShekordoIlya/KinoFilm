import { useNavigate } from "react-router-dom";
import style from "./activatePage.module.scss";

const ActivatePage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.activationSection}>
      <div className={style.activationContainer}>
        <p className={style.activationText}>
          На Вашу электронную почту отправлено письмо с ссылкой для активации
          аккаунта.{" "}
        </p>
        <p>Пожалуйста проверьте свою электронную почту</p>
        <button
          className={style.returnbtn}
          onClick={() => {
            navigate("/");
          }}
        >
          Вернуться на главную страницу
        </button>
      </div>
    </div>
  );
};
export default ActivatePage;
