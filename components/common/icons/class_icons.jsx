import Image from "next/image";
const IC_Student_Black = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/student_black.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Heart_Empty = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/heart_empty.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Location_Gray = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/location_pin_gray.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Dot_Menu = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/menu.svg"} width={w} height={h} />
    </div>
  );
};

const IC_Plus_Blue = ({ w, h }) => {
  return (
    <div>
      <Image src={"/icons/plus_blue.svg"} width={w} height={h} />
    </div>
  );
};

export {
  IC_Student_Black,
  IC_Heart_Empty,
  IC_Location_Gray,
  IC_Dot_Menu,
  IC_Plus_Blue,
};
