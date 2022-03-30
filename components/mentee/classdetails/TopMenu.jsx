import React from "react";
import styles from "./TopMenu.module.scss";
import { IC_SearchS } from "../../../icons";
import { IC_Logo } from "../../../icons";
import { IC_ArrowLeft } from "../../../icons";

function TopMenu() {
  return (
    <div className={styles.container}>
      <IC_ArrowLeft width="24px" height="24px" />
      <div>
        <IC_SearchS width="24px" height="24px" className={styles.search} />
        <IC_Logo width="24px" height="24px" />
      </div>
    </div>
  );
}

export default TopMenu;
