import styles from "./ellipseBtn.module.scss";
import classNames from "classnames";
import { IC_Check } from "../../../icons";
const EllipseBtn = ({ element, select, id, onClick }) => {
  return (
    <div
      className={classNames(
        styles.ellipseBtn,
        select == "on" ? styles.selected : styles.unselected
      )}
    >
      {select === "on" && <IC_Check className={styles.checkIcon} />}
      <input type="checkbox" id={id} />
      <label htmlFor={id} onClick={onClick}>
        <span
          className={
            select == "on" ? styles.selectedText : styles.unselectedText
          }
        >
          {element}
        </span>
      </label>
    </div>
  );
};

export default EllipseBtn;
