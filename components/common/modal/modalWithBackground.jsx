import styles from "./modalWithBackground.module.scss";
const ModalWithBackground = ({ children, setModal, prevent }) => {
  return (
    <div
      className={styles.modalWithBackground}
      onClick={() => (prevent ? setModal(true) : setModal(false))}
    >
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default ModalWithBackground;
