import { useEffect, useState, useRef } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import GetMyChatHistory from "../../../../core/api/Chat/mentor/getMyChatHistory";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { GetMyInfo } from "../../../../core/api/User";
import GetUserInfo from "../../../../core/api/User/getUserInfo";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const chatRoomId = context.query.chid;
  const othersId = context.query.other;
  const history = await GetMyChatHistory(token, chatRoomId);
  let historyData = "";

  const other = await GetUserInfo(token, othersId);
  const my = await GetMyInfo(token);

  if (Array.isArray(history) && history.length != 0) {
    historyData = history;
  }

  return {
    props: {
      historyData,
      chatRoomId,
      other,
      my,
      token,
    },
  };
}

let sockJS = new SockJS("http://13.124.128.220:8080/ws");
let ws = Stomp.over(sockJS);

const Chat = ({ historyData, chatRoomId, other, my, token }) => {
  const [chatContents, setChatContents] = useState([]);

  useEffect(() => {
    ws.connect({}, () => {
      ws.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
        console.log("subscribe-====================================", data);
        // const newMessage = JSON.parse(data.body);
        // console.log("newMessage=================================", newMessage);
        // setChatContents((prev) => [...prev, newMessage]);
        // dispatch(chatActions.getMessages(newMessage));
      });
    });
  }, [chatRoomId]);

  const sendMsg = (content) => {
    var msg = {
      type: "MESSAGE",
      chatroomId: parseInt(chatRoomId),
      senderId: my.userId,
      senderNickname: my.nickname,
      receiverId: other.userId,
      receiverNickname: other.nickname,
      message: content,
    };
    ws.send("/pub/chat", {}, JSON.stringify(msg));
    setChatContents((prev) => [...prev, content]);
  };

  return (
    <div className={styles.chatRoom}>
      <ChatRoomTopBar
        nickname={other?.nickname}
        othersRole={other?.role == "MENTEE" ? "멘티" : "멘토"}
      />
      <div className={styles.chatContentSection} id="chatContents">
        <div className={styles.chatContents}>
          {chatContents.length != 0 &&
            chatContents?.map((data, i) => {
              return (
                <ChatRoomContentBlock
                  key={i}
                  my={my}
                  other={other}
                  sentAt={data.sentAt}
                  msg={data.message}
                />
              );
            })}
        </div>
      </div>
      <ChatRoomTyping sendMsg={sendMsg} />
    </div>
  );
};
export default Chat;
