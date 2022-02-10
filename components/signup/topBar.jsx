import router from "next/router";
import styles from "./topBar.module.scss";
const TopBar = ({ url, title }) => {
  return (
    <section className={styles.topBar}>
      <button
        type="button"
        className={styles.prev}
        onClick={() => router.push(url)}
      />
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};
export default TopBar;
