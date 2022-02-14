import React from "react";
import Image from "next/image";
import styles from "./TopBar.module.scss";

function TopBar(props) {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/images/back_icon.svg"}
          width={"24px"}
          height={"24px"}
          className={styles.back_icon}
        />

        <h5>{props.title}</h5>
      </div>
      <div className={styles.bg}></div>
    </>
  );
}

export default TopBar;
