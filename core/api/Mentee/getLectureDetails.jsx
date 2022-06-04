import Api, { METHOD } from "../apiController";
export const getLectureDetails = async (data) => {
  const res = await Api({
    method: METHOD.GET,
    url: `/lectures/${data.id}/lecturePrices/${data.lecturePriceId}`,
  });
  return res.data;
};
