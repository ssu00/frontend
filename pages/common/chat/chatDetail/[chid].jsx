import { useEffect, useState } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import { getMyChatHistory, readChat } from "../../../../core/api/Chat";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { getMyInfo } from "../../../../core/api/User";
import { getUserInfo } from "../../../../core/api/User";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const chatRoomId = context.query.chid;
  const othersId = context.query.other;
  const history = await getMyChatHistory(token, chatRoomId, 1);

  const other = await getUserInfo(token, othersId);
  const my = await getMyInfo();

  await readChat(chatRoomId);

  return {
    props: {
      token,
      history,
      chatRoomId,
      other,
      my,
    },
  };
}

const Chat = ({ token, history, chatRoomId, other, my }) => {
  let sockJS = new SockJS("http://13.124.128.220:8080/ws");
  let ws = Stomp.over(sockJS);

  const [chatContents, setChatContents] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [dataLen, setDataLen] = useState(10);
  const [last, setLast] = useState(history.last);

  useEffect(() => {
    setChatContents(history.content.reverse());
  }, [history]);

  const fetchMore = async () => {
    if (pageNum != 1) {
      const moreHistory = await getMyChatHistory(token, chatRoomId, pageNum);
      setLast(moreHistory.last);
      setChatContents([...moreHistory.content.reverse(), ...chatContents]);
    }
    setPageNum(pageNum + 1);
    setDataLen(dataLen + 10);
  };

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
      receiverId: other.userId,
      senderId: my.userId,
      text: content,
    };
    ws.send("/pub/chat", {}, JSON.stringify(msg));
  };

  return (
    <div className={styles.chatRoom}>
      <ChatRoomTopBar
        nickname={other?.nickname}
        othersRole={my?.role == "MENTEE" ? "멘토" : "멘티"}
      />
      <div className={styles.chatContentSection} id="chatContents">
        <div className={styles.chatContents}>
          <InfiniteScroll
            scrollableTarget={"chatContents"}
            dataLength={dataLen}
            next={fetchMore}
            hasMore={!last}
            inverse={true}
          >
            {chatContents.length != 0 &&
              chatContents?.map((data, i) => {
                return (
                  <ChatRoomContentBlock
                    key={i}
                    my={my}
                    other={other}
                    sender={data.senderId}
                    sentAt={data.createdAt}
                    msg={data.text}
                  />
                );
              })}
          </InfiniteScroll>
        </div>
      </div>
      <ChatRoomTyping sendMsg={sendMsg} />
    </div>
  );
};
export default Chat;
