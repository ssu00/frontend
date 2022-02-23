import React, { useState } from "react";
import Alert from "./Alert";

import styles from "./Submit.module.scss";
import SubmitComplete from "./SubmitComplete";

function Submit() {
  const [Clicked, setClicked] = useState(false);
  const [Completed, setComplete] = useState(false);
  const alert = (e) => {
    e.preventDefault(e);
    setClicked(true);
  };
  const cancel = (e) => {
    e.preventDefault(e);
    setClicked(false);
  };
  const finalConfirm = (e) => {
    e.preventDefault(e);
    setComplete(true);
  };
  return (
    <>
      <button className={styles.container} onClick={alert}>
        등록
      </button>
      {Clicked && (
        <Alert
          cancel={cancel}
          Completed={Completed}
          finalConfirm={finalConfirm}
        />
      )}
      {Completed && <SubmitComplete />}
    </>
  );
}

export default Submit;
