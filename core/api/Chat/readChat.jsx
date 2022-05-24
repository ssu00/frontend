import Api, { METHOD } from "../apiController";
export const readChat = async (chid) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/chat/rooms/${chid}/enter`,
  });
  return res.data;
};
