import styles from "./categoryBtn.module.scss";
const CategoryBtn = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className={styles.myPageCategoryBtn}
      onClick={onClick}
    >
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
};

export default CategoryBtn;
