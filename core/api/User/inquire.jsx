import Api, { METHOD } from "../apiController";
export const inquire = async (token, data) => {
  const res = await Api({
    method: METHOD.POST,
    url: "/users/my-inquiry",
    data,
    headers: { Authorization: token },
  });

  return res;
};
