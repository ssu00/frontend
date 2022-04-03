import axios from "axios";
const FindPassword = async (id) => {
  try {
    const res = await axios.get(`/find-password?username=${id}`);
    return res;
  } catch (err) {
    return err.response;
  }
};
export default FindPassword;
