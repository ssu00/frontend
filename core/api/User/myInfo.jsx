import Api from "../apiController";
import { METHOD } from "../../../pages/tokenExpiredHandler";

export const getMyInfo = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/users/my-info",
    headers: { Authorization: token },
  });

  return res?.data;
};
