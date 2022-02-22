import React, { useState } from "react";
import styles from "./TopBar.module.scss";
import Image from "next/image";
import router from "next/router";
import OptionModal from "../OptionModal";

function TopBar() {
  const [Modal, setModal] = useState(false);
  const modalHandler = (e) => {
    e.preventDefault();
    setModal(!Modal);
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/images/back_icon.svg"}
          width={"24px"}
          height={"24px"}
          className={styles.back_icon}
          onClick={() => {
            router.back();
          }}
        />

        <h5>후기 상세보기</h5>
        <Image
          onClick={modalHandler}
          src={"/images/option_icon.svg"}
          width={"24px"}
          height={"24px"}
          className={styles.option_icon}
        ></Image>
      </div>
      <div className={styles.bg}></div>
      {Modal && <OptionModal modalHandler={modalHandler} />}
    </>
  );
}

export default TopBar;
