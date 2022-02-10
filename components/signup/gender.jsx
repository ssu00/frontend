import styles from "./gender.module.scss";
const Gender = ({ onChange }) => {
  return (
    <section className={styles.genderSection}>
      <label htmlFor="남">
        <div onClick={onChange("gender")} className={styles.genderElement}>
          남
          <input
            type="radio"
            name="gender"
            value="남"
            id="남"
            className={styles.genderText}
          />
        </div>
      </label>
      <label htmlFor="여">
        <div onClick={onChange("gender")} className={styles.genderElement}>
          여
          <input
            type="radio"
            name="gender"
            value="여"
            id="여"
            className={styles.genderText}
          />
        </div>
      </label>
    </section>
  );
};
export default Gender;
