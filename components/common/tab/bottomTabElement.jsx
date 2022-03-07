import styles from "./bottomTabElement.module.scss";
import router from "next/router";
const BottomTabElem = ({ url, text, children }) => {
  return (
    <button
      type="button"
      onClick={() => router.push(url)}
      className={styles.elemBtn}
    >
      <li className={styles.elem}>
        {children}
        <span className={styles.elemText_unselected}>{text}</span>
      </li>
    </button>
  );
};

export default BottomTabElem;
