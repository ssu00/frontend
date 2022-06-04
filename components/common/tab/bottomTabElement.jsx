import styles from "./bottomTabElement.module.scss";
import router from "next/router";
const BottomTabElem = ({ url, text, children }) => {
  return (
    <button
      type="button"
      onClick={() => router.push(url)}
      className={styles.bottomTabElem}
    >
      <li>
        {children}
        <span>{text}</span>
      </li>
    </button>
  );
};

export default BottomTabElem;
