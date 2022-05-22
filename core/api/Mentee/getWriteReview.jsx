import Api, { METHOD } from "../apiController";

export const getWriteReview = async (reviewID, content, score, token) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/mentees/my-lectures/${reviewID}/reviews`,
    data: { content: content, score: score },
    headers: { Authorization: token },
  });

  return res;
};
