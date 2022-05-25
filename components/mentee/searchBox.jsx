import { IC_SearchS, IC_SmilingMan } from "../../icons";
import styles from "./searchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <IC_SmilingMan className={styles.manIcon} />
      <div className={styles.inputBox}>
        <input type="text" placeholder="강의명·언어·멘토를 검색하세요" />
        <IC_SearchS className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBox;
