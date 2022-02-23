import React from "react";
import styles from "./Bottom.module.scss";
function Bottom(props) {
  return <button className={styles.container}>{props.title}</button>;
}

export default Bottom;
