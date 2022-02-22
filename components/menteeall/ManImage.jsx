import React from "react";
import styles from "./ManImage.module.scss";

function ManImage() {
  return (
    <img
      className={styles.container}
      src={"/images/menteeall/man.svg"}
      width="133px"
      height="92px"
    />
  );
}

export default ManImage;
