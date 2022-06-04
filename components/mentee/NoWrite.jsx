import styles from "./NoWrite.module.scss";
import { IC_Caution } from "../../icons";

const NoWrite = ({ text }) => {
  return (
    <section className={styles.noReviews}>
      <IC_Caution />
      <p className={styles.textCon}>{text}</p>
    </section>
  );
};

export default NoWrite;
