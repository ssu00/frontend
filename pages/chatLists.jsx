import styles from "./chatLists.module.scss";
import ChatPreview from "../components/chat/chatPreview";
import BottomTab from "../components/bottomtab";
import ChatListTitleBox from "../components/chat/chatListTitleBox";
import ChatListSearchBox from "../components/chat/chatListSearchBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const ChatLists = () => {
  const [chatExists, setChatExists] = useState(0);
  const [chatList, setChatList] = useState([]);
  const [alarm, setAlarm] = useState(0);
  const getChatLists = () => {
    axios.get("/tutors/my-chatrooms").then((resData) => {
      console.log("data: ", resData.data);
      setChatList(resData.data.content);
      setChatExists(resData.data.numberOfElements);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/");
    } else {
      getChatLists();
      chatList.map((data, i) => {
        if (data.uncheckedMessageCount) {
          setAlarm(alarm + 1);
        }
      });
    }
  }, []);

  return (
    <>
      <div className={styles.chatLists}>
        <ChatListTitleBox newAlarm={alarm} />
        <section className={styles.listSection}>
          <ChatListSearchBox />
          <div className={styles.chatPreviews}>
            {chatList !== undefined &&
              chatList.map((item, index) => (
                <ChatPreview data={item} key={index} newChat={2} />
              ))}
          </div>
          {chatExists ? (
            ""
          ) : (
            <span className={styles.background}>
              <span className={styles.basicImg} />
            </span>
          )}
        </section>
        <span className={styles.fixedTab}>
          <BottomTab num={2} />
        </span>
      </div>
    </>
  );
};

export default ChatLists;
