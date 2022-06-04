import Api, { METHOD } from "../apiController";

export const getUserInfo = async (token, id) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/users/${id}`,
    headers: { Authorization: token },
  });

  return res.data;
};
