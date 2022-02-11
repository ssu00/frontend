import React from "react";
import styles from "./Filter.module.scss";

function Filter() {
  return (
    <div className={styles.container}>
      <span>총 67개의 강의</span>
      <div className={styles.selectBox}>
        <select name="filter" id="filter-select">
          <option value="">인기순</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
