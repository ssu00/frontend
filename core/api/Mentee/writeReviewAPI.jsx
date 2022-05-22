import Api, { METHOD } from "../apiController";

export const writeReviewAPI = async (token, writeID, content, score) => {
  const res = await Api({
    method: METHOD.POST,
    url: `/mentees/my-enrollments/${writeID}/reviews`,
    content: content,
    score: score,
    headers: { Authorization: token },
  });

  return res.status;
};
