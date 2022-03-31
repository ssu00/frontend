import styles from "./menteeReview.module.scss";
import { IC_Caution } from "../../../../icons";

export const NoWriteReviews = ({ text }) => {
  return (
    <section className={styles.noReviews}>
      <IC_Caution />
      <p className={styles.subNotification}>{text}</p>
    </section>
  );
};
