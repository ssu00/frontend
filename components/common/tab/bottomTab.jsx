import styles from "./bottomTab.module.scss";
import BottomTabElem from "./bottomTabElement";
import {
  IC_Board,
  IC_BoardFill,
  IC_Chat,
  IC_ChatFill,
  IC_Home,
  IC_HomeFill,
  IC_Person,
  IC_PersonFill,
} from "../../../icons";

const BottomTab = ({ num }) => {
  return (
    <ul className={styles.tab}>
      <BottomTabElem url={"/mentor/myclass/myClassList"} text={"홈"}>
        {num[0] === 0 ? <IC_Home /> : <IC_HomeFill />}
      </BottomTabElem>
      <BottomTabElem url={"/board"} text={"자유게시판"}>
        {num[1] === 0 ? <IC_Board /> : <IC_BoardFill />}
      </BottomTabElem>
      <BottomTabElem url={"/mentor/chat/chatList"} text={"채팅"}>
        {num[2] === 0 ? <IC_Chat /> : <IC_ChatFill />}
      </BottomTabElem>
      <BottomTabElem url={"/mentor/mypage"} text={"마이페이지"}>
        {num[3] === 0 ? <IC_Person /> : <IC_PersonFill />}
      </BottomTabElem>
    </ul>
  );
};

export default BottomTab;
