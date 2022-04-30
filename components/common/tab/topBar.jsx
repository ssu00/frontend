import { IC_ArrowLeft } from "../../../icons";
import styles from "./topBar.module.scss";
const TopBar = ({ text, onClick }) => {
  return (
    <div className={styles.topBar}>
      <button type="button" aria-label="뒤로 가기" onClick={onClick}>
        <IC_ArrowLeft />
      </button>
      <span>{text}</span>
    </div>
  );
};
export default TopBar;
