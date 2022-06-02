import Api from "../apiController";
import { METHOD } from "../../../pages/tokenExpiredHandler";

export const getUncheckedNotificationCount = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/users/my-notifications/count-unchecked",
    headers: { Authorization: token },
  });

  return res?.data;
};
