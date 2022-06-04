import Api, { METHOD } from "../apiController";
export const findPassword = async (id) => {
  return await Api({
    method: METHOD.GET,
    url: `/find-password?username=${id}`,
  });
};
