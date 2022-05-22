import Api, { METHOD } from "../apiController";

export const getReviewMentee = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/mentees/my-reviews",
    headers: { Authorization: token },
  });

  return res.data;
};
