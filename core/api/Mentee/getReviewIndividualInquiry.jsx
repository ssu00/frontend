import Api, { METHOD } from "../apiController";

export const getReviewIndividualInquiry = async (token, menteeReviewId) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-reviews/${menteeReviewId}`,
    headers: { Authorization: token },
  });

  return res.data;
};
