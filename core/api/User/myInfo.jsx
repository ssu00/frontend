import myAxios from "../apiController";

const GetMyInfo = async (token) => {
  const res = await myAxios.get("/users/my-info");
  return res.data;
};

export default GetMyInfo;
