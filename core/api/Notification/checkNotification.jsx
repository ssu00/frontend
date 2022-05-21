import Api, { METHOD } from "../apiController";
export const checkNotification = async () => {
  const res = await Api({
    method: METHOD.PUT,
    url: "/users/my-notifications",
  });
  return res.data;
};
