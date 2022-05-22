import axios from "axios";
export const getNoticeDetail = async (token, notice_id) => {
  try {
    const res = await axios.get(`/notices/${notice_id}`, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
