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
    },
  };
}

const Chat = ({ historyData, chatRoomId, other, my }) => {
  const [chatContents, setChatContents] = useState([]);
  let sockJS = new SockJS("http://13.124.128.220:8080/ws");
  let ws = Stomp.over(sockJS);

  // 렌더링 될 때마다 연결,구독 다른 방으로 옮길 때 연결, 구독 해제
  useEffect(() => {
    wsConnectSubscribe();
    return () => {
      wsDisConnectUnsubscribe();
    };
  }, [chatRoomId]);

  // 웹소켓 연결, 구독
  function wsConnectSubscribe() {
    try {
      ws.connect({}, () => {
        ws.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
          console.log("subscribe=", data);
          const newMessage = JSON.parse(data.body);
          setChatContents((prev) => [...prev, newMessage]);
          dispatch(chatActions.getMessages(newMessage));
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("chatContent=", chatContents);
  }, [chatContents]);

  // 연결해제, 구독해제
  function wsDisConnectUnsubscribe() {
    try {
      ws.disconnect(() => {
        ws.unsubscribe("sub-0");
      });
    } catch (error) {
      console.log(error);
    }
  }

  const sendMsg = (content) => {
    ws.send("/pub/chat", {}, JSON.stringify(content));
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
