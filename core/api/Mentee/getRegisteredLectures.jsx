import Api, { METHOD } from "../apiController";

export const getNotApprovedLectures = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-enrollments/unchecked?page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const getApprovedLectures = async (token, page) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-enrollments/checked?page=${page}`,
    headers: { Authorization: token },
  });
  return res.data;
};

export const approveLecture = async (token, enrollment_id) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/enrollments/${enrollment_id}/finish`,
    headers: { Authorization: token },
  });
  return res.data;
};
