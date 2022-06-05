import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const sockContext = createContext();
const SocketProvider = ({ children, my, uncheckedCnt, myChatRooms }) => {
  const Sock = new SockJS("https://localhost:8080/ws");
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
      my?.code !== 401 &&
        ws?.subscribe(`/sub/notification/${my?.userId}`, (data) => {
          setAlarmContents(JSON.parse(data.body));
          setAlarmCnt((prev) => prev + 1);
        });

      myChatRooms?.code !== 500 &&
        myChatRooms?.forEach((data) => {
          ws?.subscribe(`/sub/chat/room/${data?.chatroomId}`, (data2) => {
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
