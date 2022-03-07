import React from "react";
import styles from "./Category.module.scss";

function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.active}>전체</div>
      <div className={styles.list}>개발 언어</div>
      <div className={styles.list}>수업 방식</div>
      <div className={styles.list}>레벨</div>
    </div>
  );
}

export default Category;
