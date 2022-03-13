import { useEffect } from "react";
import styles from "./addrBlock.module.scss";
import { GetSiGunGus } from "../../../core/api/Address";
import { GetStates } from "../../../core/api/Address";
import { GetDongs } from "../../../core/api/Address";
import { BasicSelectBox } from "../../common";

const AddrBlock = ({ datas }) => {
  const { addr, setAddr } = datas;
  useEffect(() => {
    GetSi(addr.statePick);
  }, [addr.statePick]);

  useEffect(() => {
    if (addr.sigunguPick != "") {
      GetDong(addr.statePick, addr.sigunguPick);
    }
  }, [addr.sigunguPick]);

  useEffect(() => {
    GetAddr();
    GetSi(addr.statePick);
  }, []);

  const GetAddr = async () => {
    if (Array.isArray(addr.state) && addr.state.length == 0) {
      await GetStates().then((res) => {
        setAddr((prev) => ({
          ...prev,
          state: res.data.map((data) => data.value),
        }));
      });
    }
  };

  const GetSi = async (state) => {
    await GetSiGunGus(state).then((res) => {
      let sigunguBase = "";
      setAddr((prev) => ({
        ...prev,
        sigungu: res.data.map((data, i) => {
          if (i == 0) {
            sigunguBase = data.value;
          }
          return data.value;
        }),
        sigunguPick: sigunguBase,
      }));
    });
  };

  const GetDong = async (state, siGunGu) => {
    await GetDongs(state, siGunGu).then((res) => {
      setAddr((prev) => ({
        ...prev,
        dong: res.data.map((data) => data.value),
      }));
    });
  };

  return (
    <>
      <span className={styles.row}>
        <BasicSelectBox
          arr={addr.state}
          name={"states"}
          onChange={(e) =>
            setAddr({
              ...addr,
              sigungu: [],
              dong: [],
              sigunguPick: "",
              dongPick: "",
              statePick: e.target.value,
            })
          }
        />
        <BasicSelectBox
          arr={addr.sigungu}
          name={"sigungus"}
          onChange={(e) =>
            setAddr({
              ...addr,
              dong: [],
              dongPick: "",
              sigunguPick: e.target.value,
            })
          }
        />
      </span>
      <span className={styles.row}>
        <BasicSelectBox
          arr={addr.dong}
          name={"dongs"}
          onChange={(e) =>
            setAddr({
              ...addr,
              dongPick: e.target.value,
            })
          }
        />
      </span>
    </>
  );
};

export default AddrBlock;
