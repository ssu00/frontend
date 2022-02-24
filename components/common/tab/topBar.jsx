import styles from "./topBar.module.scss";
const TopBar = ({ text }) => {
  return (
    <section className={styles.topBar}>
      <button type="button" alt="뒤로 가기" className={styles.goBack} />
      <span className={styles.topBarText}>{text}</span>
    </section>
  );
};
export default TopBar;
