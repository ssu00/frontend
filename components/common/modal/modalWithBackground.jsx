import styles from "./modalWithBackground.module.scss";
const ModalWithBackground = ({ children, setModal, prevent }) => {
  return (
    <section
      className={styles.modalWithBackground}
      onClick={() => {
        if (prevent) setModal(true);
        else setModal(false);
      }}
    >
      <div className={styles.modal}>{children}</div>
    </section>
  );
};

export default ModalWithBackground;
