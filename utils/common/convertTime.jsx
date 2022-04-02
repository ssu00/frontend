import moment from "moment";
import "moment/locale/ko";
import GetKoreanTime from "./getKoreanTime";

const ConvertTime = (sentAt, setConverted) => {
  moment.locale("ko");
  const convertedTime = GetKoreanTime(new Date(sentAt));
  setConverted(() => ({
    date: moment(convertedTime).format("YY-MM-DD"),
    time: moment(convertedTime).format("LT"),
    sameDay: moment(new Date()).isSame(convertedTime, "day"),
  }));
};

export default ConvertTime;
