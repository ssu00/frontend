import axios from "axios";
const Login_API = async (id, pw) => {
  try {
    const res = await axios.post(
      "/login",
      { password: pw, username: id },
      { withCredentials: true }
    );
    console.log("login res==", res);
    return res;
  } catch (err) {
    return err;
  }
};
export default Login_API;
