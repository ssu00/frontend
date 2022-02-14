import React from "react";
import styles from "./Category.module.scss";
function Category() {
  return (
    <div className={styles.container}>
      <ul>
        <li>작성한 글</li>
        <li className={styles.clicked}>댓글단 글</li>
        <li>좋아요한 글</li>
      </ul>
    </div>
  );
}

export default Category;
