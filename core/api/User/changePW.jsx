import Api, { METHOD } from "../apiController";
export const changePassword = async (token, data) => {
  const res = await Api({
    method: METHOD.PUT,
    url: "/users/my-password",
    data,
    headers: { Authorization: token },
  });
  return res;
};
