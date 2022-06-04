import Api, { METHOD } from "../apiController";
export const enrollClass = async (token, params) => {
  return await Api({
    method: METHOD.POST,
    url: `/lectures/${params.id}/lecturePrices/${params.lecturePriceId}/enrollments`,
    headers: { Authorization: token },
  });
};

export const getEnrolledClass = async (token, enrollmentId) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/mentees/my-enrollments/${enrollmentId}/lecture`,
    headers: { Authorization: token },
  });
  return res.data;
};
