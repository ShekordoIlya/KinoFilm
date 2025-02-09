import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
interface ILogo {
  logoText: string;
}

const Logo = ({ logoText }: ILogo) => {
  return (
    <p className={style.logo}>
      <Link to="/">{logoText}</Link>
    </p>
  );
};

export default Logo;
