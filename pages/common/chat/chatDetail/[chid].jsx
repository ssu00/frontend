import { useEffect, useState } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import GetMyChatHistory from "../../../../core/api/Chat/getMyChatHistory";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { GetMyInfo } from "../../../../core/api/User";
import GetUserInfo from "../../../../core/api/User/getUserInfo";
import ReadChat from "../../../../core/api/Chat/readChat";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const chatRoomId = context.query.chid;
  const othersId = context.query.other;
  const history = await GetMyChatHistory(chatRoomId);

  const other = await GetUserInfo(token, othersId);
  const my = await GetMyInfo(token);

  await ReadChat(chatRoomId);

  return {
    props: {
      history,
      chatRoomId,
      other,
      my,
    },
  };
}

let sockJS = new SockJS("http://13.124.128.220:8080/ws");
let ws = Stomp.over(sockJS);

const Chat = ({ history, chatRoomId, other, my }) => {
  const [chatContents, setChatContents] = useState([]);
  useEffect(() => {
    console.log(history);
    setChatContents(history.content);
  }, [history]);
  //어떻게 불러와? page=2 -> page=1 로 불러와

  useEffect(() => {
    ws.connect({}, () => {
      ws.subscribe(`/sub/chat/room/${chatRoomId}`, (data) => {
        const newMessage = JSON.parse(data.body);
        setChatContents((prev) => [...prev, newMessage]);
      });
    });
  }, [chatRoomId]);

  const sendMsg = (content) => {
    var msg = {
      type: "MESSAGE",
      chatroomId: parseInt(chatRoomId),
      senderId: my.userId,
      text: content,
    };
    ws.send("/pub/chat", {}, JSON.stringify(msg));
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
              /*
              첫 페이지부터 불러서 무한스크롤을 적용하면 사용자가 매번 첫 채팅부터 보게 될 것 같고... 
              */
              return (
                <ChatRoomContentBlock
                  key={i}
                  my={my}
                  other={other}
                  sentAt={data.createdAt}
                  msg={data.text}
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
