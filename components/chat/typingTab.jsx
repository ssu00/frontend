import styles from "./typingTab.module.scss";
import { useState } from "react";
const TypingTab = ({ sendMsgEnter }) => {
  const [data, setData] = useState("");
  const onChangeData = (e) => {
    setData(e.target.value);
  };

  const enter = () => {
    sendMsgEnter(data);
    document.getElementById("messageInput").value = "";
  };

  return (
    <section className={styles.typingTab}>
      {/* <button
        type="button"
        className={styles.addFile}
        onClick={() => console.log("plus")}
      /> */}
      <input
        type="text"
        className={styles.chatContent}
        placeholder={"메세지를 입력하세요."}
        onChange={onChangeData}
        onKeyPress={(e) => {
          if (e.key == "Enter" && data != "") enter();
        }}
        id="messageInput"
      />

      <button
        type="submit"
        className={styles.send}
        onClick={() => {
          if (data != "") {
            enter();
          }
        }}
      >
        보내기
      </button>
    </section>
  );
};
//이미지 필요!
export default TypingTab;
