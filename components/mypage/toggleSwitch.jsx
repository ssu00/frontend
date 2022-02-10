import styles from "./toggleSwitch.module.scss";
const ToggleSwitch = () => {
  return (
    <label className={styles.switchButton}>
      <input type="checkbox" />
      <span className={styles.onoffSwitch}></span>
    </label>
  );
};
export default ToggleSwitch;
