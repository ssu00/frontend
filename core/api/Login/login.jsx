import axios from "axios";
const Login_API = async (id, pw) => {
  try {
    const res = await axios.post("/login", { password: pw, username: id });
    return res;
  } catch (err) {
    return err;
  }
};
export default Login_API;
