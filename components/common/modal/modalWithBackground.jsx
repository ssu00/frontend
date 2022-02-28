import styles from "./modalWithBackground.module.scss";
const ModalWithBackground = ({ children, setModal }) => {
  return (
    <section
      className={styles.modalWithBackground}
      onClick={() => setModal(false)}
    >
      <div className={styles.modal}>{children}</div>
    </section>
  );
};

export default ModalWithBackground;
