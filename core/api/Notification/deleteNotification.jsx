import Api, { METHOD } from "../apiController";

export const deleteNotification = async (token, notificationId) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: `/users/my-notifications/${notificationId}`,
    headers: { Authorization: token },
  });
  return res.status;
};
