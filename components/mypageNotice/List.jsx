import React from "react";
import styles from "./List.module.scss";
import Image from "next/image";
function List() {
  return (
    <>
      <div className={styles.line}>
        <span></span>
      </div>
      <ul className={styles.container}>
        <li>
          <span className={styles.date}>2021.09.29</span>
          <h6>[1.1.0] 업데이트 안내</h6>
          <span className={styles.tagIcon}>
            <Image src={"/images/tag_icon2.svg"} width="7px" height="11px" />
          </span>
        </li>
        <li>
          <span className={styles.date}>2021.09.29</span>
          <h6>[1.1.0] 업데이트 안내</h6>
          <span className={styles.tagIcon}>
            <Image src={"/images/tag_icon2.svg"} width="7px" height="11px" />
          </span>
        </li>
        <li>
          <span className={styles.date}>2021.09.29</span>
          <h6>[1.1.0] 업데이트 안내</h6>
          <span className={styles.tagIcon}>
            <Image src={"/images/tag_icon2.svg"} width="7px" height="11px" />
          </span>
        </li>
        <li>
          <span className={styles.date}>2021.09.29</span>
          <h6>[1.1.0] 업데이트 안내</h6>
          <span className={styles.tagIcon}>
            <Image src={"/images/tag_icon2.svg"} width="7px" height="11px" />
          </span>
        </li>
      </ul>
    </>
  );
}

export default List;
