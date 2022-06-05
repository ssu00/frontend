import Api, { METHOD } from "../apiController";
// import { METHOD } from "../../../pages/tokenExpiredHandler";

export const getMyChatRooms = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: `/chat/rooms`,
  });
  return res.data;
};

export const allChatRooms = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: `/chat/rooms/all`,
  });
  return res?.data;
};
