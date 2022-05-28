import Api, { METHOD } from "../apiController";
export const getMyMentees = async (page, closed, token) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-mentees?closed=${closed}&page=${page}`,
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

export const getMenteeLecture = async (token, mentee, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentors/my-mentees/${mentee}?&page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const getUncheckedLecture = async (token) => {
  const res = await Api({
    method: METHOD.GET,
    url: "mentors/my-mentees/unchecked?page=1", //page 없애기
    headers: { Authorization: token },
  });
  return res.data;
};
