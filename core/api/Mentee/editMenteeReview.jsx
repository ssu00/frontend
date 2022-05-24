import Api, { METHOD } from "../apiController";

export const editMenteeReview = async (reviewId, token, content, score) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/mentees/my-reviews/${reviewId}`,
    data: { content: content, score: score },
    headers: { Authorization: token },
  });

  return res;
};
