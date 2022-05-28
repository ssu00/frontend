import Api, { METHOD } from "../apiController";
export const checkEnrollment = async (token, enrollmentId) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/enrollments/${enrollmentId}/check`,
    headers: { Authorization: token },
  });
  return res.data;
};
