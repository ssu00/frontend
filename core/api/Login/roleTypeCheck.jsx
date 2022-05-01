import axios from "axios";

const GetUserRoleType = async (token) => {
  try {
    const res = await axios.get("/session-user", {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default GetUserRoleType;
