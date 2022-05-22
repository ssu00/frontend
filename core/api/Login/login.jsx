import Api, { METHOD } from "../apiController";
export const login = async (id, pw) => {
  return await Api({
    method: METHOD.POST,
    url: "/login",
    data: { password: pw, username: id },
  });
};
