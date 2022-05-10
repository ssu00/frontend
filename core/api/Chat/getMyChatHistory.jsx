import axios from "axios";
const GetMyChatHistory = async (chid) => {
  try {
    const res = await axios.get(`/chat/rooms/${chid}/messages`);
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetMyChatHistory;
