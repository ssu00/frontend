import Api, { METHOD } from "../apiController";
export const openLecture = async (lectureId, priceId, token) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/mentors/my-lectures/${lectureId}/lecturePrices/${priceId}/open`,
    headers: { Authorization: token },
  });
  return res.status;
};

export const closeLecture = async (lectureId, priceId, token) => {
  const res = await Api({
    method: METHOD.PUT,
    url: `/mentors/my-lectures/${lectureId}/lecturePrices/${priceId}/close`,
    headers: { Authorization: token },
  });
  return res.status;
};
