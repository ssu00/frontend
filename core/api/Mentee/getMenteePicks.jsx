import Api, { METHOD } from "../apiController";

export const getMenteePicks = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-picks`,
    params: page,
    headers: { Authorization: token },
  });

  return res.data;
};
