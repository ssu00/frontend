import styles from "./basicRadio.module.scss";
const BasicRadio = ({ reason, name, handleReason }) => {
  return (
    <label htmlFor={reason}>
      <section className={styles.radioSection}>
        <input
          type="radio"
          name={name}
          value={reason}
          className={styles.radioBtn}
          id={reason}
          onChange={() => handleReason(reason)}
        />
        <span>{reason}</span>
      </section>
    </label>
  );
};

export default BasicRadio;
