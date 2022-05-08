import axios from "axios";
const GetMyChatRooms = async () => {
  try {
    const res = await axios.get("/chat/rooms");
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetMyChatRooms;
