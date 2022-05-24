import Api, { METHOD } from "../apiController";
export const getMyChatRooms = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: `/chat/rooms`,
  });
  return res.data;
};
