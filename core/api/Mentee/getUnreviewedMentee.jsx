import Api, { METHOD } from "../apiController";

export const getUnreviewedMentee = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "/mentees/my-enrollments/unreviewed",
    headers: { Authorization: token },
  });

  return res.data;
};
