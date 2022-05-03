import axios from "axios";
const GetMyChatRooms = async (token, role) => {
  try {
    const res = await axios.get(
      role == "ROLE_MENTOR" ? "/mentors/my-chatrooms" : "/mentees/my-chatrooms",
      {
        headers: { Authorization: token },
      }
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetMyChatRooms;
