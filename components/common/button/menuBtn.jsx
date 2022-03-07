import styles from "./menuBtn.module.scss";
import classNames from "classnames";
const MenuBtn = ({ selected, text, onClick, ownStyle }) => {
  return (
    <button
      type="button"
      className={classNames(
        ownStyle,
        selected ? styles.selectedBtn : styles.unselectedBtn
      )}
      onClick={onClick}
    >
      <strong
        className={selected ? styles.selectedText : styles.unselectedText}
      >
        {text}
      </strong>
    </button>
  );
};

export default MenuBtn;
