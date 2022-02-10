import styles from "./selectButton.module.scss";
const EllipseButton = ({ element, selected, id, onClick }) => {
  return (
    <div className={styles.ellipseBtn}>
      <input type="checkbox" id={id} onClick={onClick} />
      <label htmlFor={id}>
        {selected == "on" ? (
          <div className={styles.selected}>
            <span className={styles.check}>
              <span className={styles.text}>✓</span>
            </span>
            <span className={styles.element}>{element}</span>
          </div>
        ) : (
          <div className={styles.unselected}>
            <span className={styles.element}>{element}</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default EllipseButton;
