import styles from "./chatContent.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
const TimeMaker = (originTime) => {
  let time = "";
  let date = "";
  let sameDay = false;
  const dates = originTime?.toString();
  if (dates) {
    const newDates = new Date(dates);
    time = newDates.toLocaleTimeString();
    date = newDates.toLocaleDateString();
    sameDay = moment().isSame(newDates, "day");
    if (sameDay) {
      return time.slice(0, -3);
    } else {
      return date.substring(2);
    }
  }
};

const MyChats = ({ text, time }) => {
  const [result, setResult] = useState("");
  useEffect(() => {
    let originTime = time;
    setResult(TimeMaker(originTime));
  }, []);

  return (
    <section className={styles.myChat}>
      <span className={styles.content}>{text}</span>
      <span className={styles.time}>{result}</span>
    </section>
  );
};

const OthersChats = ({ text, time, profile, name }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    let originTime = time;
    setResult(TimeMaker(originTime));
  }, []);

  return (
    <section className={styles.otherChat}>
      <div className={styles.profile}>
        {profile ? (
          <Image
            src={profile}
            width="44px"
            height="44px"
            alt=""
            className={styles.profileImg}
          />
        ) : (
          <button type="button" className={styles.profileImg} />
        )}
      </div>
      <div className={styles.chatContents}>
        <span className={styles.name}>{name}</span>
        <span className={styles.content}>{text}</span>
        <span className={styles.time}>{result}</span>
      </div>
    </section>
  );
};

export { MyChats, OthersChats };
