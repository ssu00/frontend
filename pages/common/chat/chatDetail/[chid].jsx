import { useContext, useEffect, useState } from "react";
import * as cookie from "cookie";
import styles from "./chat.module.scss";
import { getMyChatHistory, readChat } from "../../../../core/api/Chat";
import ChatRoomTyping from "../../../../components/mentor/chat/chatRoomTyping";
import ChatRoomTopBar from "../../../../components/mentor/chat/chatRoomTopBar";
import ChatRoomContentBlock from "../../../../components/mentor/chat/chatRoomContentBlock";
import { getMyInfo, getUserInfo } from "../../../../core/api/User";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserRoleType } from "../../../../core/api/Login";
import { sockContext } from "../../../../core/provider";
import { getOutFromChatRoom } from "../../../../core/api/Chat";

export async function getServerSideProps(context) {
  const token = cookie.parse(context.req.headers.cookie).accessToken;
  const chatRoomId = context.query.chid;
  const othersId = context.query.other;
  const history = await getMyChatHistory(token, chatRoomId, 1).then((res) =>
    res.content.reverse()
  );
  const other = await getUserInfo(token, othersId);
  const my = await getMyInfo(token);
  const myRole = await getUserRoleType(token).then((data) => data.loginType);

  await readChat(chatRoomId);

  return {
    props: {
      token,
      history,
      chatRoomId,
      other,
      my,
      myRole,
    },
  };
}

const Chat = ({ token, history, chatRoomId, other, my, myRole }) => {
  const chatContext = useContext(sockContext);
  const ws = chatContext.ws;
  const [chatContents, setChatContents] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [dataLen, setDataLen] = useState(10);

  useEffect(() => {
    setChatContents(history);
  }, [history]);

  useEffect(() => {
    //detect page leaving
    window.onbeforeunload = function (e) {
      if (e) getOutFromChatRoom(token, chatRoomId);
    };
    window.onpopstate = function (e) {
      if (e) getOutFromChatRoom(token, chatRoomId);
    };
  }, []);

  const fetchMore = async () => {
    if (pageNum != 1) {
      const moreHistory = await getMyChatHistory(
        token,
        chatRoomId,
        pageNum
      ).then((res) => res.content.reverse());
      setChatContents([...moreHistory, ...chatContents]);
    }
    setPageNum(pageNum + 1);
    setDataLen(dataLen + 10);
  };

  useEffect(() => {
    if (chatContext.chat != undefined && chatContext.chat.type == "MESSAGE")
      setChatContents((prev) => [...prev, chatContext.chat]);
    else if (
      chatContext.chat != undefined &&
      chatContext.chat.type == "ENTER"
    ) {
      setChatContents(
        chatContents.map((data) =>
          !data.checked ? { ...data, checked: true } : data
        )
      );
    }
  }, [chatContext.chat]);

  const sendMsg = (content) => {
    if (content.replace(/ /g, "").length !== 0) {
      var msg = {
        type: "MESSAGE",
        chatroomId: parseInt(chatRoomId),
        receiverId: other.userId,
        senderId: my.userId,
        text: content,
      };
      ws.send("/pub/chat", {}, JSON.stringify(msg));
    }
  };

  return (
    <div className={styles.chatRoom}>
      <ChatRoomTopBar
        nickname={other?.nickname}
        othersRole={myRole == "ROLE_MENTEE" ? "멘토" : "멘티"}
        getOut={() => getOutFromChatRoom(token, chatRoomId)}
      />
      <div className={styles.chatContentSection} id="chatContents">
        <div className={styles.chatContents}>
          <InfiniteScroll
            scrollableTarget={"chatContents"}
            dataLength={dataLen}
            next={fetchMore}
            hasMore={true}
            // hasMore={!last}
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
                    checked={data.checked}
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
