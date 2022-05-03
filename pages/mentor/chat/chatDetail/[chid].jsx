import { useEffect, useState, useRef } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import GetMyChatHistory from "../../../../core/api/Chat/mentor/getMyChatHistory";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import GetMenteeInfo from "../../../../core/api/Mentee/getMenteeInfo";
import { GetMyInfoAsMentor } from "../../../../core/api/Mentor";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const chatRoomId = context.query.chid;
  const menteeId = context.query.mentee;
  const history = await GetMyChatHistory(token, chatRoomId);
  let historyData = "";
  const mentee = await GetMenteeInfo(menteeId);
  const menteeInfo = JSON.stringify(mentee);

  const mentor = await GetMyInfoAsMentor(token);
  const mentorInfo = JSON.stringify(mentor);

  if (Array.isArray(history) && history.length != 0) {
    historyData = history;
  }

  return {
    props: {
      historyData,
      chatRoomId,
      menteeInfo,
      mentorInfo,
    },
  };
}

const Chat = ({ historyData, chatRoomId, menteeInfo, mentorInfo }) => {
  const mentee = JSON.parse(menteeInfo).user;
  const mentor = JSON.parse(mentorInfo).user;
  const [chatContents, setChatContents] = useState([]);

  let sockJS = new SockJS("http://13.124.128.220:8080/ws");
  let ws = Stomp.over(sockJS);
  // useEffect(() => {
  //   console.log("historyData=", historyData);
  // }, []);

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
      ws.connect(
        {},
        // {
        //   token: token,
        // },
        () => {
          ws.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
            console.log("subscribe=", data);
            const newMessage = JSON.parse(data.body);
            setChatContents((prev) => [...prev, newMessage]);
            dispatch(chatActions.getMessages(newMessage));
          });
        }
      );
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

  console.log("mentee=", mentee);
  return (
    <div className={styles.chatRoom}>
      <ChatRoomTopBar nickname={mentee?.nickname} />
      <div className={styles.chatContentSection} id="chatContents">
        <div className={styles.chatContents}>
          {chatContents.length != 0 &&
            chatContents?.map((data, i) => {
              const my = data.senderNickname == mentor.nickname;
              console.log("ddddd===", data);
              return (
                <ChatRoomContentBlock
                  key={i}
                  my={my}
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
