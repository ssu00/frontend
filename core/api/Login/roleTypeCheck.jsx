import Api, { METHOD } from "../apiController";
export const getUserRoleType = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/session-user",
    headers: { Authorization: token },
  });
  return res.data;
};
