import axios from "axios";
const Inquire = async (token, data) => {
  try {
    const res = await axios.post("/users/my-inquiry", data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default Inquire;
