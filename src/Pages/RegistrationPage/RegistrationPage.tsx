import { useNavigate } from "react-router-dom";
import style from "./registrationPage.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registrationUser } from "../../store/userSlice";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.users);
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    course_group: 14,
  });

  const formHandle = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registrationUser(registrationData));
    console.log(registrationData);
  };
  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
          <form onSubmit={formHandle} className={style.registrationForm}>
            <div className={style.formInputContainerEmail}>
              <label className={style.label}>Email:</label>
              <input
                value={registrationData.email}
                name="email"
                onChange={inputHandle}
                placeholder="Введите email"
                className={style.inputField}
                type="email"
              ></input>
            </div>
            <div className={style.formInputContainer}>
              <label className={style.label}>Username:</label>
              <input
                value={registrationData.username}
                name="username"
                onChange={inputHandle}
                placeholder="Введите имя пользователя"
                className={style.inputField}
                type="text"
              ></input>
            </div>
            <div className={style.formInputContainer}>
              <label className={style.label}>Password:</label>
              <input
                value={registrationData.password}
                name="password"
                onChange={inputHandle}
                placeholder="Введите пароль"
                className={style.inputField}
                type="password"
              ></input>
            </div>
            <div className={style.submitBtnContainer}>
              <button
                onClick={() => {
                  navigate("activatePage/:uid/:token");
                }}
                className={style.submitBtn}
                type="submit"
              >
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
