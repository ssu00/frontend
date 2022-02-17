import React from "react";
import styles from "./EmptyBox.module.scss";
import Image from "next/image";

function EmptyBox(props) {
  return (
    <div className={styles.container}>
      <div className={styles.empty_box}>
        <Image src={"/images/empty_icon.svg"} width={"45px"} height={"45px"} />
        <span>{props.title}</span>
      </div>
    </div>
  );
}

export default EmptyBox;
