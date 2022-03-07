import styles from "./bottomTab.module.scss";
import { IC_Board, IC_Chat, IC_Home, IC_MyPage } from "../icons/tab_icons";
import BottomTabElem from "./bottomTabElement";

const BottomTab = ({ num }) => {
  return (
    <ul className={styles.tab}>
      <BottomTabElem url={"/mentor/myclass/myClassList"} text={"홈"}>
        <IC_Home w={24} h={24} num={num[0]} />
      </BottomTabElem>
      <BottomTabElem url={"/board"} text={"자유게시판"}>
        <IC_Board w={24} h={24} num={num[1]} />
      </BottomTabElem>
      <BottomTabElem url={"/chat"} text={"채팅"}>
        <IC_Chat w={24} h={24} num={num[2]} />
      </BottomTabElem>
      <BottomTabElem url={"/mentor/mypage"} text={"마이페이지"}>
        <IC_MyPage w={24} h={24} num={num[3]} />
      </BottomTabElem>
    </ul>
  );
};

export default BottomTab;
