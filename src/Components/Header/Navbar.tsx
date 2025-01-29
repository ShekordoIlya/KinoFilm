import style from "./Navbar.module.scss";
import Input from "./Input";

interface INavbar {
  inputType: string;
}

const Navbar = ({ inputType }: INavbar) => {
  return (
    <nav className={style.wrapper}>
      <Input inputType={inputType} placeholder="Введите название фильма" />
    </nav>
  );
};

export default Navbar;
