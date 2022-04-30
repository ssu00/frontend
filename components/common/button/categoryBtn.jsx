import { IC_ChevronDownS } from "../../../icons";
import styles from "./categoryBtn.module.scss";
const CategoryBtn = ({ text, onClick, arrow }) => {
  return (
    <button type="button" className={styles.categoryBtn} onClick={onClick}>
      <span>{text}</span>
      {arrow && (
        <div className={styles.arrow}>
          <IC_ChevronDownS />
        </div>
      )}
    </button>
  );
};

export default CategoryBtn;
