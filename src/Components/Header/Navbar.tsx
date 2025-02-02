import style from "./Navbar.module.scss";
import Input from "./Input";

interface INavbar {
  inputType: string;
}

const Navbar = ({ inputType }: INavbar) => {
  return (
    <form className={style.wrapper}>
      <Input inputType={inputType} placeholder="Введите название фильма" />
    </form>
  );
};

export default Navbar;

{
  /* <form onSubmit={handlerSubmit} className={style.wrapper}>
      <Input inputType={inputType} placeholder="Введите название фильма" />
    </form> */
}
