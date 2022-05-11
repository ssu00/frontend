import axios from "axios";
const GetMyChatHistory = async (token, chid, page) => {
  try {
    const res = await axios.get(`/chat/rooms/${chid}/messages?page=${page}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetMyChatHistory;
