import Api, { METHOD } from "../apiController";

export const getMyReviews = async (reviewID) => {
  const res = await Api({
    method: METHOD.GET,
    url: `mentees/my-reviews/${reviewID}`,
  });

  return res.data;
};
