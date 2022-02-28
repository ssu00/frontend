import Image from "next/image";
const IC_No_Alarm = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/no_alarm.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Alarm = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/alarm.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Setting = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/setting.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Menu = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/menu.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Book = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/book.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Student_White = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/student.svg"} width={w} height={h} />
    </div>
  );
};

export {
  IC_No_Alarm,
  IC_Alarm,
  IC_Setting,
  IC_Menu,
  IC_Book,
  IC_Student_White,
};
