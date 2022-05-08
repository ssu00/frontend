import axios from "axios";
const ReadChat = async (chid) => {
  try {
    const res = await axios.put(`/chat/rooms/${chid}/enter`);
    return res.data;
  } catch (err) {
    return err;
  }
};
export default ReadChat;
