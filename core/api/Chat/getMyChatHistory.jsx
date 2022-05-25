import Api, { METHOD } from "../apiController";
export const getMyChatHistory = async (token, chid, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/chat/rooms/${chid}/messages?page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};
