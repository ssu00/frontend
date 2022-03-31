import axios from "axios";
const GetMyChatRooms = async (token) => {
  try {
    const res = await axios.get("/mentors/my-chatrooms", {
      headers: { Authorization: token },
    });
    console.log("res=", res);
    return res.data;
  } catch (err) {
    console.log("err=", err);
    return err;
  }
};

export default GetMyChatRooms;
