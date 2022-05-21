import Api, { METHOD } from "../apiController";

export const resignMembership = async (token, data) => {
  const res = await Api({
    method: METHOD.DELETE,
    url: "/users",
    headers: { Authorization: token },
    data,
  });

  return res.data;
};
