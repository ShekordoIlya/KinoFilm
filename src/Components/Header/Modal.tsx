import style from "./Header.module.scss";
import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<IModal>) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.wrapperBtn}>
          <button className={style.closeBtn} onClick={onClose}>
            X
          </button>
        </div>

        {children}
      </div>
      <div className={style.modalOverlay} onClick={onClose}></div>
    </div>,
    document.body
  );
};

export default Modal;
