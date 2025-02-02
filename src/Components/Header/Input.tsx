import style from "./Navbar.module.scss";
import Button from "./Button";

interface IInput {
  inputType: string;
  placeholder: string;
}

const Input = ({ inputType, placeholder }: IInput) => {
  // const dispatch = useDispatch();
  // const { seacrhingFilms } = useSelector((state: any) => state.filmSearch);
  // useEffect(() => {
  //   dispatch(filmSearch());
  // }, []);

  // console.log(seacrhingFilms, "FROM INPUT");
  return (
    <>
      <input
        type={inputType}
        className={style.input}
        placeholder={placeholder}
      />
      <Button buttonType="submit" buttonText={"Поиск"} />
    </>
  );
};

export default Input;

{
  /* <>
      <input
        onChange={handlerInput}
        value={searchQuery}
        type={inputType}
        className={style.input}
        placeholder={placeholder}
      />
      <Button buttonType="submit" buttonText={"Поиск"} />
    </> */
}
