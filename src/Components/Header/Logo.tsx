import style from "./Navbar.module.scss";
interface ILogo {
  logoText: string;
}

const Logo = ({ logoText }: ILogo) => {
  return (
    <p className={style.logo}>
      <a href="#">{logoText}</a>
    </p>
  );
};

export default Logo;
