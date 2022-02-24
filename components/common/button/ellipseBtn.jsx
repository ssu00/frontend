import styles from "./ellipseBtn.module.scss";
import classNames from "classnames";
const EllipseBtn = ({ element, select, id, onClick }) => {
  return (
    <section
      className={classNames(
        styles.ellipseBtn,
        select ? styles.selected : styles.unselected
      )}
    >
      <div className={select ? styles.checkIcon : ""} />
      <input type="checkbox" id={id} onClick={onClick} />
      <label htmlFor={id}>
        <span className={select ? styles.selectedText : styles.unselectedText}>
          {element}
        </span>
      </label>
    </section>
  );
};

export default EllipseBtn;
