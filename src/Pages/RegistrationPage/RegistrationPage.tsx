import { useNavigate } from "react-router-dom";
import style from "./registrationPage.module.scss";
import { useState } from "react";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { registrationData, setRegistrationData } = useState({
    email: "",
    password: "",
  });
  return (
    <div className={style.registrationbcg}>
      <button
        className={style.returnbtn}
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
      <div className={style.section}>
        <div className={style.registrationContainer}>
          <form className={style.registrationForm}>
            <div className={style.formInputContainerEmail}>
              <label className={style.label}>Email:</label>
              <input
                // value={registrationData.email}
                name="email"
                onChange={(e) => {
                  const { value, name } = e.target;
                  setRegistrationData((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
                }}
                placeholder="Введите email"
                className={style.inputField}
                type="email"
              ></input>
            </div>
            <div className={style.formInputContainer}>
              <label className={style.label}>Password:</label>
              <input
                // value={registrationData.password}
                placeholder="Введите пароль"
                className={style.inputField}
                type="password"
              ></input>
            </div>
            <div className={style.submitBtnContainer}>
              <button className={style.submitBtn} type="submit">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
