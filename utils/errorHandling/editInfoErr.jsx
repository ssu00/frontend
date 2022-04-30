import { PhoneValidation, EmailValidation } from "../validation";

const EditInfoErr = (datas, setCheckError) => {
  const { dupCheck, user } = datas;
  if (dupCheck.nicknameDupError == true) {
    setCheckError({
      isError: true,
      errorMsg: "중복되는 닉네임입니다.",
    });
  } else if (!EmailValidation(user.email)) {
    setCheckError({ isError: true, errorMsg: "이메일 형식을 체크해주세요." });
  } else if (dupCheck.emailDupError == true) {
    setCheckError({
      isError: true,
      errorMsg: "중복되는 이메일입니다.",
    });
  } else if (user.nickname == "" || user.email == "" || user.phone == "") {
    setCheckError({ isError: true, errorMsg: "빈칸을 모두 채워주세요." });
  } else if (!PhoneValidation(user.phone)) {
    setCheckError({
      isError: true,
      errorMsg: "휴대폰 번호 형식을 확인해주세요.",
    });
  } else if (
    dupCheck.emailDupError == false &&
    dupCheck.emailDupSuccess == false
  ) {
    setCheckError({
      isError: true,
      errorMsg: "아이디 중복 확인을 진행해주세요.",
    });
  } else if (dupCheck.emailDupError == true) {
    setCheckError({
      isError: true,
      errorMsg: "중복되는 아이디입니다.",
    });
  } else if (
    dupCheck.nicknameDupError == false &&
    dupCheck.nicknameDupSuccess == false
  ) {
    setCheckError({
      isError: true,
      errorMsg: "닉네임 중복 확인을 진행해주세요.",
    });
  } else {
    setCheckError({ isError: false, errorMsg: "" });
  }
};

export default EditInfoErr;
