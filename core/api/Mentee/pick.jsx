import axios from "axios";

export const updatePicks = async (token, params) => {
  try {
    const res = await axios.post(
      `/lectures/${params.id}/lecturePrices/${params.lecturePriceId}/picks`,
      {},
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
