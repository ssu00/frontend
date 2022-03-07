import styles from "./basicRadio.module.scss";
const BasicRadio = ({ reason, name }) => {
  return (
    <label htmlFor={reason}>
      <section className={styles.radioSection}>
        <input
          type="radio"
          name={name}
          value={reason}
          className={styles.radioBtn}
          id={reason}
        />
        <span className={styles.reason}>{reason}</span>
      </section>
    </label>
  );
};

export default BasicRadio;
