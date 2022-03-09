import styles from "./ellipseBtn.module.scss";
import classNames from "classnames";
import { IC_Check } from "../../../icons";
const EllipseBtn = ({ element, select, id, onClick }) => {
  return (
    <section
      className={classNames(
        styles.ellipseBtn,
        select == "on" ? styles.selected : styles.unselected
      )}
    >
      <div className={select == "on" ? styles.checkIcon : ""} />
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
    </section>
  );
};

export default EllipseBtn;
