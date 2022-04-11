import React, { useCallback, useState } from "react";
import styles from "./BottomNavBar.module.scss";
import { IC_HeartEmpty, IC_HeartRedFill_Lg } from "../../../icons";
import { IC_Share } from "../../../icons";
import Drawer from "react-bottom-drawer";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import EnrollClass from "../../../core/api/Mentee/enrollClass";

function BottomNavBar({ classData, token, params }) {
  // const [isVisible, setIsVisible] = useState(false);
  // const [systemType, setSystemType] = useState("");
  // const [group, setGroup] = useState("");

  const handleEnrollClass = async () => {
    const res = await EnrollClass(token, params);
    if (res.status === 201) {
      alert("강의등록 성공");
    } else {
      alert("동일한 수강내역이 존재합니다.");
    }
  };

  // const handleSelection = (value, setValue) => {
  //   setValue(value);
  // };

  // const openDrawer = () => {
  //   setIsVisible(true);
  // };

  // const onClose = useCallback(() => {
  //   setIsVisible(false);
  // }, []);
  return (
    <div className={styles.container}>
      <button>
        {classData.picked ? (
          <IC_HeartRedFill_Lg />
        ) : (
          <IC_HeartEmpty width={"24px"} height={"24px"} />
        )}
      </button>
      <button>
        <IC_Share width={"24px"} height={"24px"} />
      </button>
      <button className={styles.subscription} onClick={handleEnrollClass}>
        강의 신청
      </button>
      <div className={styles.indicator}></div>
      {/* <Drawer isVisible={isVisible} onClose={onClose} className={styles.drawer}>
        <FormControl fullWidth className={styles.selecter}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={systemType}
            onChange={(e) => handleSelection(e.target.value, setSystemType)}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>강의방식1 선택하기</em>;
              }

              return selected;
            }}
          >
            <MenuItem value={"온라인"}>온라인</MenuItem>
            <MenuItem value={"오프라인"}>오프라인</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className={styles.selecter}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={group}
            onChange={(e) => handleSelection(e.target.value, setGroup)}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>강의방식2 선택하기</em>;
              }

              return selected;
            }}
          >
            <MenuItem value={"1:1강의"}>1:1강의</MenuItem>
            <MenuItem value={"그룹강의(1:3)"}>그룹강의(1:3)</MenuItem>
          </Select>
        </FormControl>
        <span className={styles.line} />
        <button className={styles.enroll}>강의 신청</button>
      </Drawer> */}
    </div>
  );
}

export default BottomNavBar;
