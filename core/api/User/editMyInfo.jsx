import Api, { METHOD } from "../apiController";

export const editMyInfo = async (token, params) => {
  const res = await Api({
    method: METHOD.PUT,
    url: "/users/my-info",
    params,
    headers: { Authorization: token },
  });

  return res.data;
};
