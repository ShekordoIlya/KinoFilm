import style from "./Navbar.module.scss";

interface IButton {
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonText: string;
}

const Button = ({ buttonType, buttonText }: IButton) => {
  return (
    <button type={buttonType} className={style.btnSearch}>
      {buttonText}
    </button>
  );
};

export default Button;
