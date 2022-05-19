import Api, { METHOD } from "../apiController";
export const getStates = async () => {
  return await Api({
    method: METHOD.GET,
    url: `/addresses/states`,
  });
};
