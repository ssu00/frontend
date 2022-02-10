import styles from "./topBar.module.scss";
const TopBar = () => {
  return (
    <section className={styles.adminTop}>
      <h1 className={styles.title}>Admin</h1>
      <h1 className={styles.title}>김지수</h1>
    </section>
  );
};

export default TopBar;
