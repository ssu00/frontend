import React, { createContext, useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Sock = new SockJS("http://13.124.128.220:8080/ws");
const ws = Stomp.over(Sock);
export const sockContext = createContext();

const SocketProvider = ({ children, my, uncheckedCnt, myChatRooms }) => {
  const [alarmContents, setAlarmContents] = useState();
  const [alarmCnt, setAlarmCnt] = useState(uncheckedCnt);
  const [chat, setChat] = useState();

  useEffect(() => {
    ws?.connect({}, () => {
      ws?.subscribe(`/sub/notification/${my.userId}`, (data) => {
        const newMessage = JSON.parse(data.body);
        setAlarmContents(newMessage);
        setAlarmCnt((prev) => prev + 1);
      });

      myChatRooms.map((data) => {
        ws?.subscribe(`/sub/chat/room/${data.chatroomId}`, (data2) => {
          setChat(JSON.parse(data2.body));
        });
      });
    });
    return () => {};
  }, []);

  return (
    <sockContext.Provider
      value={{ alarmContents: alarmContents, alarmCnt: alarmCnt, chat: chat }}
    >
      {children}
    </sockContext.Provider>
  );
};

export default SocketProvider;
