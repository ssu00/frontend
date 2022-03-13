import { useEffect, useState } from "react";
import styles from "./basicDataBlock.module.scss";
import { BasicSelectBox } from "../../common";
import SetBirthYear from "../../../utils/auth/setBirthYear";

const BasicDataBlock = ({ datas }) => {
  const { user, setUser } = datas;
  const [basicData, setBasicData] = useState({
    birthYear: [],
    gender: ["남자", "여자"],
  });

  useEffect(() => {
    setBasicData({ ...basicData, birthYear: SetBirthYear() });
  }, []);

  return (
    <>
      <span className={styles.row}>
        <BasicSelectBox
          arr={basicData.birthYear}
          name={"birthYear"}
          onChange={(e) => {
            setUser({ ...user, birth: e.target.value });
          }}
        />
        <BasicSelectBox
          arr={basicData.gender}
          name={"gender"}
          onChange={(e) => {
            setUser({ ...user, gender: e.target.value });
          }}
        />
      </span>
    </>
  );
};

export default BasicDataBlock;
