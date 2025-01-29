import style from "./Navbar.module.scss";
import Button from "./Button";

interface IInput {
  inputType: string;
  placeholder: string;
}

const Input = ({ inputType, placeholder }: IInput) => {
  return (
    <>
      <input
        type={inputType}
        className={style.input}
        placeholder={placeholder}
      />
      <Button buttonType="button" buttonText={"Поиск"} />
    </>
  );
};

export default Input;
