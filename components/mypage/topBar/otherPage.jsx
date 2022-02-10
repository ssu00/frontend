import styles from "./otherPage.module.scss";
import router from "next/router";
const OtherTopBar = ({ title, url }) => {
  return (
    <section className={styles.myPageOtherTop}>
      <div className={styles.textSection}>
        <button
          type="button"
          className={styles.prev}
          onClick={() => router.push(url)}
        />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.logoSection} />
    </section>
  );
};

export default OtherTopBar;
