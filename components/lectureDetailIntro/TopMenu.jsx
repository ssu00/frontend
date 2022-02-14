import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.scss";
function TopMenu() {
  return (
    <div className={styles.container}>
      <Image
        src={"/images/lecture_detail_intro/icon_back.svg"}
        width="24px"
        height="24px"
      />
      <div>
        <Image
          src={"/images/lecture_detail_intro/search.svg"}
          width="24px"
          height="24px"
          className={styles.search}
        />
        <Image
          src={"/images/lecture_detail_intro/logo.svg"}
          width="24px"
          height="24px"
        />
      </div>
    </div>
  );
}

export default TopMenu;
