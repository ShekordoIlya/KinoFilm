import { Link, useNavigate } from "react-router-dom";
import styles from "./notFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.bcnotfound}>
      <button
        className={styles.returnhome}
        onClick={() => {
          navigate("/");
        }}
      >
        На главную страницу
      </button>

      <p className={styles.textnotfound}>Страница не найдена</p>
    </div>
  );
};

export default NotFoundPage;
