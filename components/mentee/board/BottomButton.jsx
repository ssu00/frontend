import React, { useEffect, useState } from "react";
import { uploadBoardComments } from "../../../core/api/Mentee";
import styles from "./BottomButton.module.scss";

const BottomButton = ({ token, postId }) => {
  const [value, setValue] = useState("");

  const uploadComment = async () => {
    try {
      await uploadBoardComments(token, postId, { content: value });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.buttonContainer} onSubmit={uploadComment}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="댓글을 입력해주세요."
      />
      <button className={styles.button}>등록</button>
    </form>
  );
};

export default BottomButton;
