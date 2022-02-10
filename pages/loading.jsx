import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <section className={styles.loadingPage}>
      <h1 className={styles.loadingText}>Loading...</h1>
      <span className={styles.loadingGauge}>
        <span className={styles.bluebar} />
      </span>
    </section>
  );
};

export default Loading;
