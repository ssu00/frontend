import React, { createContext, useEffect, useState, useCallback } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Sock = new SockJS("http://13.124.128.220:8080/ws");
export const ws = Stomp.over(Sock);
export const sockContext = createContext();

const SocketProvider = ({ children, my, uncheckedCnt, myChatRooms }) => {
  const [alarmContents, setAlarmContents] = useState();
  const [alarmCnt, setAlarmCnt] = useState(uncheckedCnt);
  const [send, setSend] = useState(0);
  const [chat, setChat] = useState();

  const getContextValue = useCallback(
    () => ({
      alarmContents: alarmContents,
      alarmCnt: alarmCnt,
      chat: chat,
      send: send,
    }),
    [alarmContents, alarmCnt, chat, send]
  );

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
          setSend((prev) => prev + 1);
        });
      });
    });
    return () => {
      //clean-up
      // setAlarmContents(undefined);
      setAlarmCnt(0);
      // setChat(undefined);
      setSend(0);
    };
  }, []);

  useEffect(() => {
    console.log("sockContext===", chat);
  }, [chat]);

  return (
    <sockContext.Provider value={getContextValue()}>
      {children}
    </sockContext.Provider>
  );
};

export default SocketProvider;
