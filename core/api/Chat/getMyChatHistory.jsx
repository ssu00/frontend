import Api, { METHOD } from "../apiController";
export const getMyChatHistory = async (chid, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/chat/rooms/${chid}/messages?page=${page}`,
  });
  return res.data;
};
