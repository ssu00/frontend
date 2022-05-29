import React, { createContext, useEffect, useState, useCallback } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const sockContext = createContext();
const SocketProvider = ({ children, my, uncheckedCnt, myChatRooms }) => {
  const Sock = new SockJS("http://13.124.128.220:8080/ws");
  const ws = Stomp.over(Sock);

  const [alarmContents, setAlarmContents] = useState(undefined);
  const [alarmCnt, setAlarmCnt] = useState(uncheckedCnt);
  const [chat, setChat] = useState(undefined);

  const getContextValue = useCallback(
    () => ({ alarmContents, alarmCnt, chat, ws }),
    [alarmContents, alarmCnt, chat, ws]
  );

  useEffect(() => {
    ws?.connect({}, () => {
      ws?.subscribe(`/sub/notification/${my.userId}`, (data) => {
        const newMessage = JSON.parse(data.body);
        setAlarmContents(newMessage);
        setAlarmCnt((prev) => prev + 1);
      });

      myChatRooms?.forEach((data) => {
        ws?.subscribe(`/sub/chat/room/${data.chatroomId}`, (data2) => {
          setChat(JSON.parse(data2.body));
        });
      });
    });
  }, []);

  return (
    <sockContext.Provider value={getContextValue()}>
      {children}
    </sockContext.Provider>
  );
};

export default SocketProvider;
