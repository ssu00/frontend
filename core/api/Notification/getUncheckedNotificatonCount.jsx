import myAxios from "../apiController";
const GetUncheckedNotificationCount = async (token) => {
  const res = await myAxios.get("/users/my-notifications/count-unchecked");
  return res.data;
};

export default GetUncheckedNotificationCount;
