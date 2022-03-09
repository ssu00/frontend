import { IC_ChevronDownS } from "../../../icons";
import styles from "./categoryBtn.module.scss";
const CategoryBtn = ({ text, onClick, arrow }) => {
  return (
    <button
      type="button"
      className={styles.myPageCategoryBtn}
      onClick={onClick}
    >
      <h1 className={styles.text}>{text}</h1>
      {arrow ? (
        <div className={styles.arrow}>
          <IC_ChevronDownS />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
};

export default CategoryBtn;
