import Api, { METHOD } from "../apiController";

export const getNoticeDetail = async (token, notice_id) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/notices/${notice_id}`,
    headers: { Authorization: token },
  });

  return res.data;
};
