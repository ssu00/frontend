import Api, { METHOD } from "../apiController";
export const getMyMentees = async (page, closed) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-mentees?closed=${closed}&page=${page}`,
  });
  return res.data;
};

export const getMenteeLecture = async (token, mentee, closed, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-mentees/${mentee}?closed=${closed}&page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};
