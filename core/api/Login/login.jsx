import axios from "axios";
const Login_API = (id, pw) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/login", { password: pw, username: id })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export default Login_API;
