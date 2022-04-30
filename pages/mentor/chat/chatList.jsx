import styles from "./chatList.module.scss";
import { BottomTab } from "../../../components/common";
import React, { useState, useEffect } from "react";
import GetMyChatRooms from "../../../core/api/Chat/mentor/getMyChatRooms";
import * as cookie from "cookie";
import ChatPreview from "../../../components/mentor/chat/chatPreview";
import { IC_SmilingMan } from "../../../icons";
import ChatListTopBar from "../../../components/mentor/chat/chatListTopBar";

export const getServerSideProps = async (context) => {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const myChatRooms = await GetMyChatRooms(token);

  return {
    props: {
      token,
      myChatRooms,
    },
  };
};

const ChatList = ({ token, myChatRooms }) => {
  return (
    <>
      <div className={styles.chatList}>
        <ChatListTopBar />
        {myChatRooms.content.length == 0 && (
          <div className={styles.noChat}>
            <IC_SmilingMan width="180px" height="124px" />
          </div>
        )}
        {myChatRooms != undefined &&
          myChatRooms?.content?.map((data, i) => {
            return <ChatPreview chatData={data} key={i} />;
          })}
        {/* <ChatListTitleBox newAlarm={alarm} />
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
        </section> */}
        <BottomTab num={[0, 0, 1, 0]} />
      </div>
    </>
  );
};

export default ChatList;
