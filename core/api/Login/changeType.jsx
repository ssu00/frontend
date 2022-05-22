import Api, { METHOD } from "../apiController";
export const changeType = async (token) => {
  return await Api({
    method: METHOD.GET,
    url: "/change-type",
    headers: { Authorization: token },
  });
};
