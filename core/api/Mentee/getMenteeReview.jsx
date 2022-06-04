import Api, { METHOD } from "../apiController";
export const getMenteeReview = async (data) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/lectures/${data.id}/lecturePrices/${data.lecturePriceId}/reviews`,
  });
  return res.data;
};
