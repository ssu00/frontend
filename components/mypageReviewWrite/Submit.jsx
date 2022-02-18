import React, { useState } from "react";
import styles from "./Submit.module.scss";

function Submit() {
  const [Clicked, setClicked] = useState(false);
  const alert = (e) => {
    e.preventDefault(e);
    setClicked(true);
  };
  const cancel = (e) => {
    e.preventDefault(e);
    setClicked(false);
  };
  return (
    <>
      <button className={styles.container} onClick={alert}>
        등록
      </button>
      {Clicked && (
        <div className={styles.bg}>
          <div className={styles.modal}>
            <h5>후기 등록</h5>
            <h6>작성한 후기를 등록하시겠습니까?</h6>
            <div className={styles.button_box}>
              <button className={styles.cancel} onClick={cancel}>
                취소
              </button>
              <button className={styles.confirm}>확인</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Submit;
