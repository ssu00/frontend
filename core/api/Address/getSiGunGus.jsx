import Api, { METHOD } from "../apiController";
export const getSiGunGus = async (state) => {
  return await Api({
    method: METHOD.GET,
    url: `/addresses/siGunGus`,
    params: {
      state: state,
    },
  });
};
