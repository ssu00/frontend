import axios from "axios";
const ChangePassword = async (token, data) => {
  try {
    const res = await axios.put("/users/my-password", data, {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default ChangePassword;
