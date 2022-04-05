import axios from "axios";
export const GetLectureDetails = async (token, data) => {
  try {
    const res = await axios.get(
      `/lectures/${data.id}/lecturePrices/${data.lecturePriceId}`,
      {
        headers: { Authorization: token },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetLectureDetails;
