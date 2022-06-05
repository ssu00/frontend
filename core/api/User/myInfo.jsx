import Api, { METHOD } from "../apiController";

export const getMyInfo = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/users/my-info",
    headers: { Authorization: token },
  });

  return res?.data;
};
