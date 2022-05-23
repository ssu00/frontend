import Api, { METHOD } from "../apiController";

export const updatePicks = async (token, params) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/lectures/${params.id}/lecturePrices/${params.lecturePriceId}/picks`,
    headers: { Authorization: token },
  });

  return res.data;
};
