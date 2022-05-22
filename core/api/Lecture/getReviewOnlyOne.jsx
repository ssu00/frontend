import Api, { METHOD } from "../apiController";

export const getReviewOnlyOne = async (classID, reviewID) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-lectures/${classID}/reviews/${reviewID}`,
  });

  return res.data;
};
