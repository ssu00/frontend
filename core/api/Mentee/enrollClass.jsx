import axios from "axios";

const EnrollClass = async (token, params) => {
  try {
    const res = await axios.post(
      `/lectures/${params.id}/lecturePrices/${params.lecturePriceId}/enrollments`,
      {},
      { headers: { Authorization: token } }
    );

    return res;
  } catch (err) {
    return err;
  }
};

export default EnrollClass;
