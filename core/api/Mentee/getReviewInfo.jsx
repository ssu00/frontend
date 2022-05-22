import Api, { METHOD } from "../apiController";

export const getReviewInfo = async (id, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-reviews/${id}`,
    headers: { Authorization: token },
  });

  return res.data;
};
