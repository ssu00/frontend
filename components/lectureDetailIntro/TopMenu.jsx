import React from "react";
import styles from "./TopMenu.module.scss";
function TopMenu() {
  return (
    <div className={styles.container}>
      <img
        src={"/images/lecture_detail_intro/icon_뒤로가기.svg"}
        width="24px"
        height="24px"
      />
      <div>
        <img
          src={"/images/lecture_detail_intro/search.svg"}
          width="24px"
          height="24px"
          className={styles.search}
        />
        <img
          src={"/images/lecture_detail_intro/logo.svg"}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  );
}

export default TopMenu;
