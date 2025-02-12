import { useDispatch, useSelector } from "react-redux";
import style from "./filterField.module.scss";
import { useNavigate } from "react-router-dom";
import {
  setMaxRating,
  setMinRating,
  setShowFilterField,
  setYearFrom,
  setYearTo,
} from "../../store/filmFilterSlice";

const FilterField = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showFilterField, yearFrom, yearTo } = useSelector(
    (state) => state.filterFilms
  );
  return (
    <div className={!showFilterField ? style.filter : style.filterHide}>
      <div>
        <p>Выберите рейтинг:</p>
        <div>
          <p>От:</p>
          <select
            onChange={(e) => {
              dispatch(setMinRating(e.target.value));
            }}
            name="minRating"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <p>До:</p>
          <select
            onChange={(e) => {
              dispatch(setMaxRating(e.target.value));
            }}
            name="maxRating"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div>
        <p>Выберите год:</p>
        <input
          onChange={(e) => {
            dispatch(setYearFrom(e.target.value));
          }}
          type="range"
          min="1990"
          max="2024"
          value={yearFrom}
        />
        <label>От</label>
        <label>{yearFrom}</label>
      </div>
      <div>
        <input
          onChange={(e) => {
            dispatch(setYearTo(e.target.value));
          }}
          type="range"
          min="1990"
          max="2024"
          value={yearTo}
        />
        <label>До</label>
        <label>{yearTo}</label>
      </div>

      <button
        type={"button"}
        onClick={() => {
          navigate("/film/filter");
        }}
      >
        Применить фильтр
      </button>

      <button
        onClick={() => {
          dispatch(setShowFilterField(!showFilterField));
        }}
        className={!showFilterField ? style.buttonShow : style.buttonHide}
        type="button"
      ></button>
    </div>
  );
};

export default FilterField;
