import myAxios from "../apiController";
const Login_API = async (id, pw) => {
  return await myAxios.post("/login", { password: pw, username: id });
};
export default Login_API;
