import styles from "./bottomTab.module.scss";
import BottomTabElem from "./bottomTabElement";
import {
  Board,
  BoardFill,
  Chat,
  ChatFill,
  Home,
  HomeFill,
  Person,
  PersonFill,
} from "../../../icons";

const BottomTab = ({ num }) => {
  return (
    <ul className={styles.tab}>
      <BottomTabElem url={"/mentor/myclass/myClassList"} text={"홈"}>
        {num[0] === 0 ? <Home /> : <HomeFill />}
      </BottomTabElem>
      <BottomTabElem url={"/board"} text={"자유게시판"}>
        {num[1] === 0 ? <Board /> : <BoardFill />}
      </BottomTabElem>
      <BottomTabElem url={"/chat"} text={"채팅"}>
        {num[2] === 0 ? <Chat /> : <ChatFill />}
      </BottomTabElem>
      <BottomTabElem url={"/mentor/mypage"} text={"마이페이지"}>
        {num[3] === 0 ? <Person /> : <PersonFill />}
      </BottomTabElem>
    </ul>
  );
};

export default BottomTab;
