import styles from "./memberInfoEdit.module.scss";
import OtherTopBar from "../components/mypage/topBar/otherPage";
import { ThickInputBoxWithTitle } from "../components/mypage/inputBox";
import { BlueBtn } from "../components/mypage/myPageBtn";
import { Selection } from "../components/mypage/selectBox";
import axios from "axios";
import { useState } from "react";
const MemberInfoEdit = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("MALE");
  const [birthYear, setBYear] = useState(2002);
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submitChange = () => {
    const data = {
      bio: "안녕하세요",
      birthYear: birthYear,
      email: email,
      gender: gender,
      image: "string",
      nickname: name,
      phoneNumber: phone,
      zone: addr,
    };
    axios
      .put("/users/my-info", data)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <section className={styles.memberInfoEdit}>
      <OtherTopBar title={"회원정보 수정"} url={"/profileEdit"} />
      <section className={styles.content}>
        <ThickInputBoxWithTitle
          title={"이메일"}
          type={"email"}
          placeholder={"이메일을 입력하세요"}
          setValue={setEmail}
        />
        <ThickInputBoxWithTitle
          title={"성명"}
          type={"text"}
          placeholder={"성명을 입력하세요"}
          setValue={setName}
        />
        <section className={styles.sexBirth}>
          <Selection title={"성별"} opt={1} setValue={setGender} />
          <Selection title={"출생년도"} opt={2} setValue={setBYear} />
        </section>

        <ThickInputBoxWithTitle
          title={"휴대폰 번호"}
          type={"tel"}
          placeholder={"휴대폰 번호를 입력하세요"}
          setValue={setPhone}
        />
        <ThickInputBoxWithTitle
          title={"주소"}
          type={"text"}
          placeholder={"주소를 입력하세요"}
          setValue={setAddr}
        />
      </section>
      <div className={styles.fixed}>
        <BlueBtn text={"저장"} onClick={submitChange} />
      </div>
      <span className={styles.msg}>
        {success == true
          ? "정상적으로 변경되었습니다."
          : error == true
          ? "에러가 발생했습니다."
          : ""}
      </span>
    </section>
  );
};

export default MemberInfoEdit;
