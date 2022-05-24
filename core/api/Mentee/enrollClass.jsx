import Api, { METHOD } from "../apiController";
export const enrollClass = async (token, params) => {
  return await Api({
    method: METHOD.POST,
    url: `/lectures/${params.id}/lecturePrices/${params.lecturePriceId}/enrollments`,
    headers: { Authorization: token },
  });
};
