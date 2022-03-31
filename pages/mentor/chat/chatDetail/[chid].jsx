import { useEffect, useState, useRef } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import GetMyChatHistory from "../../../../core/api/Chat/mentor/getMyChatHistory";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import GetMenteeInfo from "../../../../core/api/Mentee/getMenteeInfo";
import { GetMyInfoAsMentor } from "../../../../core/api/Mentor";

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

  const [socketConnected, setSocketConnected] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [msgCnt, setMsgCnt] = useState(0);
  const [chatContents, setChatContents] = useState([]);

  const webSocketUrl = `ws://13.124.128.220:8080/ws/chat/${chatRoomId}`;
  const ws = useRef(null);

  useEffect(() => {
    // const height = document.body.scrollHeight;
    // document.getElementById("chatContents").scroll();

    if (!ws.current) {
      ws.current = new WebSocket(`${webSocketUrl}${chatRoomId}`);
      ws.current.onopen = () => {
        console.log("open!");
        setSocketConnected(true);
      };
      ws.current.onclose = (error) => {
        console.log("close!");
        !error && setSocketConnected(false);
      };
      ws.current.onerror = (error) => {
        console.log("error!");
        error && setSocketConnected(false);
      };
      ws.current.onmessage = (e) => {
        console.log("onmessage called");
        console.log("e==", e);
        setSessionId(JSON.parse(e.data).sessionId);
        setMsgCnt(msgCnt + 1);
        console.log("onmessage finished");
      };
    }
    return () => {
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    console.log("chatContent=", chatContents);
  }, [chatContents]);

  useEffect(() => {
    setChatContents(historyData);
  }, [historyData]);

  const sendMsg = (data) => {
    if (socketConnected) {
      var msg = {
        type: "message",
        sessionId: sessionId,
        chatroomId: parseInt(chatRoomId),
        senderNickname: mentor.nickname,
        receiverId: mentee.userId,
        message: data,
      };
      ws.current.send(JSON.stringify(msg));
      console.log("ws=", ws.current);
      setChatContents((prev) => [...prev, msg]);
      setMsgCnt(msgCnt + 1);
    }
  };

  // useEffect(() => {
  //   console.log("ws.current==", ws.current);
  //   console.log("msgCnt==", msgCnt);
  //   if (!ws.current) return;
  //   else if (msgCnt != 0) {
  //     console.log("before onmessage");
  //     ws.current.onmessage = (e) => {
  //       console.log("onmessage called");
  //       console.log("e==", e);
  //       setSessionId(JSON.parse(e.data).sessionId);
  //       setMsgCnt(msgCnt + 1);
  //       // console.log("e=", JSON.parse(e.data));
  //       setChatContents((prev) => [...prev, e.data]);
  //       console.log("onmessage finished");
  //     };
  //     console.log("after onmessage");
  //   }
  // }, [msgCnt]);

  useEffect(() => {
    ws.current.onmessage = (e) => {
      console.log("onmessage called");
      console.log("e==", e);
      setSessionId(JSON.parse(e.data).sessionId);
      setMsgCnt(msgCnt + 1);
      // console.log("e=", JSON.parse(e.data));
      // setChatContents((prev) => [...prev, e.data]);
      console.log("onmessage finished");
    };
  }, []);

  return (
    <div className={styles.chatRoom}>
      <ChatRoomTopBar nickname={mentee.nickname} />
      <div className={styles.chatContentSection} id="chatContents">
        <div className={styles.chatContents}>
          {chatContents.length != 0 &&
            chatContents?.map((data, i) => {
              const my = data.senderNickname == mentor.nickname;
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
