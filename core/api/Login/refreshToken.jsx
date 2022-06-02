import Api from "../apiController";
import { METHOD } from "../../../pages/tokenExpiredHandler";

export const refreshToken = async (access, refresh, role) => {
  console.log("this is refresh===", access);
  console.log("this is refresh===", refresh);
  console.log("this is refresh===", role);

  const res = await Api({
    method: METHOD.POST,
    url: "/refresh-token",
    headers: {
      Authorization: access,
      ["X-Access-Token"]: access,
      ["X-Refresh-Token"]: refresh,
      role: role,
    },
  });
  console.log("res================", res);
  console.log("this is refresh end===");
  return res;
};
