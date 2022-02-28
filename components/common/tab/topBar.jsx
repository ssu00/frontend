import styles from "./topBar.module.scss";
const TopBar = ({ text, onClick }) => {
  return (
    <section className={styles.topBar}>
      <button
        type="button"
        alt="뒤로 가기"
        className={styles.goBack}
        onClick={onClick}
      />
      <span className={styles.topBarText}>{text}</span>
    </section>
  );
};
export default TopBar;
