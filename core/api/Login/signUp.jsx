import axios from "axios";
const SignUp_API = (user, addr) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/sign-up", {
        birthYear: user.birth,
        gender: user.gender == "남자" ? "MALE" : "FEMALE",
        image: "string",
        name: user.name,
        nickname: user.nickname,
        password: user.pw,
        passwordConfirm: user.pwConfirm,
        phoneNumber: user.phone,
        username: user.email,
        zone: `${addr.statePick} ${addr.sigunguPick} ${addr.dongPick}`,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default SignUp_API;
