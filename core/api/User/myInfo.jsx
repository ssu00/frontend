import Api, { METHOD } from "../apiController";

export const getMyInfo = async () => {
  const res = await Api({
    method: METHOD.GET,
    url: "/users/my-info",
  });

  return res?.data;
};
