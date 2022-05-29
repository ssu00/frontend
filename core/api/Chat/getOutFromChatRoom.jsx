import Api, { METHOD } from "../apiController";
export const getOutFromChatRoom = async (token, chatroom) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/chat/rooms/${chatroom}/out`,
    headers: { Authorization: token },
  });
  return res.data;
};
