import Api, { METHOD } from "../apiController";

export const getNoticeList = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/notices`,
    headers: { Authorization: token },
    params: page,
  });

  return res.data;
};
