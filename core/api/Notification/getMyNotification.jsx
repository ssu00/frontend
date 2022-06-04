import Api, { METHOD } from "../apiController";

export const getMyNotification = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/users/my-notifications?page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};
