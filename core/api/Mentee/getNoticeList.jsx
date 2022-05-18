import axios from "axios";
export const getNoticeList = async (token, page) => {
  try {
    const res = await axios.get(`/notices`, {
      headers: { Authorization: token },
      params: page,
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
