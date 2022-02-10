import styles from "./aboutTutee.module.scss";
import router from "next/router";
const TuteeBox = ({ num }) => {
  return (
    <button
      type="button"
      className={styles.TuteeBox}
      onClick={() =>
        num == 1 ? router.push("/tuteeList") : router.push("/refundList")
      }
    >
      <span className={num == 1 ? styles.icon1 : styles.icon2} />
      <h1 className={styles.title}>{num == 1 ? "튜티 목록" : "환불 목록"}</h1>
    </button>
  );
};

const AboutTutee = () => {
  return (
    <section className={styles.aboutTuteeSection}>
      <TuteeBox num={1} />
      <TuteeBox num={2} />
    </section>
  );
};

export default AboutTutee;
