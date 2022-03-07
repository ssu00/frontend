import React, { useState } from "react";
import styles from "./StarBtn.module.scss";
import Image from "next/image";
function StarBtn() {
  const [OnOff, setOnOff] = useState(false);
  const clicked = (e) => {
    setOnOff(!OnOff);
    console.log(OnOff);
  };
  return (
    <button className={styles.container} onClick={clicked}>
      {OnOff ? (
        <Image src={"/images/star_btn_on.svg"} width={"40px"} height={"40px"} />
      ) : (
        <Image
          src={"/images/star_btn_off.svg"}
          width={"40px"}
          height={"40px"}
        />
      )}
    </button>
  );
}

export default StarBtn;
