import Api, { METHOD } from "../apiController";
export const refreshToken = async (access, refresh, role) => {
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
  return res;
};
