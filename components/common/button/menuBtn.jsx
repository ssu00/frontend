import styles from "./menuBtn.module.scss";
const MenuBtn = ({ selected, text, onClick }) => {
  return (
    <button
      type="button"
      className={selected ? styles.selectedBtn : styles.unselectedBtn}
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
