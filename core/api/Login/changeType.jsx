import myAxios from "../apiController";
const ChangeType = async (token) => {
  return await myAxios.get("/change-type", {
    headers: { Authorization: token },
  });
};
export default ChangeType;
