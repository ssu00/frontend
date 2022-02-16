import React from "react";
import styles from "./ReviewCategory.module.scss";

function ReviewCategory(props) {
  const clicked = (e) => {
    props.getCategory(e.currentTarget.textContent);
    const items = Array.from(e.currentTarget.parentNode.children);

    items.forEach((item) => {
      item.className = `${styles.menu_box}`;
    });
    e.currentTarget.className = `${styles.menu_box} ${styles.clicked}`;
  };
  return (
    <div className={styles.container}>
      <div onClick={clicked} className={`${styles.menu_box} ${styles.clicked}`}>
        후기작성
      </div>
      <div onClick={clicked} className={styles.menu_box}>
        후기내역
      </div>
    </div>
  );
}

export default ReviewCategory;
