import Navbar from "./Navbar";
import style from "./Header.module.scss";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo logoText={"KinoFilm"} />
        <Navbar inputType={"text"} />
      </div>
    </header>
  );
};

export default Header;
