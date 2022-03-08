import { IC_ArrowLeft } from "../../../icons";
import styles from "./topBar.module.scss";
const TopBar = ({ text, onClick }) => {
  return (
    <section className={styles.topBar}>
      <button
        type="button"
        aria-label="뒤로 가기"
        className={styles.goBack}
        onClick={onClick}
      >
        <IC_ArrowLeft />
      </button>
      <span className={styles.topBarText}>{text}</span>
    </section>
  );
};
export default TopBar;
