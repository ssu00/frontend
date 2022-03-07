import Image from "next/image";
const IC_Home = ({ w, h, num }) => {
  return num == 0 ? (
    <Image src={"/icons/home.svg"} width={w} height={h} />
  ) : (
    <Image src={"/icons/home_select.svg"} width={w} height={h} />
  );
};

const IC_Board = ({ w, h, num }) => {
  return num == 0 ? (
    <Image src={"/icons/board.svg"} width={w} height={h} />
  ) : (
    <Image src={"/icons/board_select.svg"} width={w} height={h} />
  );
};

const IC_Chat = ({ w, h, num }) => {
  return num == 0 ? (
    <Image src={"/icons/chat.svg"} width={w} height={h} />
  ) : (
    <Image src={"/icons/chat_select.svg"} width={w} height={h} />
  );
};

const IC_MyPage = ({ w, h, num }) => {
  return num == 0 ? (
    <Image src={"/icons/person.svg"} width={w} height={h} />
  ) : (
    <Image src={"/icons/person_select.svg"} width={w} height={h} />
  );
};

export { IC_Home, IC_Board, IC_Chat, IC_MyPage };
