import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeField } from "../redux/reducers/update";
import axios from "axios";
import { useRouter } from "next/router";
import ClassRegistration from "./classRegistration";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
} //getServerSideProps 없으면 새로 고침 시 에러!

const ClassEdit = () => {
  const [data, setData] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update.update,
  }));

  const router = useRouter();
  const { id } = router.query;
  const ClassMainContent = () => {
    axios
      .get(`/lectures/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    ClassMainContent();
  }, [dispatch]);

  useEffect(() => {
    const lecArr = [],
      langArr = [],
      lecKindId = [];
    if (data.lectureSubjects) {
      lecArr.push(data?.lectureSubjects[0]?.learningKind);
      langArr.push(data?.lectureSubjects[0]?.krSubject);
      lecKindId.push(data?.lectureSubjects[0]?.learningKindId);
    }
    let online = "off",
      offline = "off",
      discuss = "off",
      personal = "off",
      group = "off";
    for (let i = 0; i < data.systemTypes?.length; i++) {
      if (data.systemTypes[i].type == "ONLINE") {
        online = "on";
      }
      if (data.systemTypes[i].type == "OFFLINE") {
        offline = "on";
      }
      if (data.systemTypes[i].type == "DISCUSS") {
        discuss = "on";
      }
    }

    let Gprice = 0,
      Gtime = 0,
      GnumOfTimes = 0,
      groupMax = 0,
      Pprice = 0,
      Ptime = 0,
      PnumOfTimes = 0;

    for (let i = 0; i < data.lecturePrices?.length; i++) {
      if (!data.lecturePrices[i].isGroup) {
        Pprice = data.lecturePrices[i].pertimeCost;
        Ptime = data.lecturePrices[i].pertimeLecture;
        PnumOfTimes = data.lecturePrices[i].totalTime;
        personal = "on";
      }
      if (data.lecturePrices[i].isGroup) {
        Gprice = data.lecturePrices[i].pertimeCost;
        Gtime = data.lecturePrices[i].pertimeLecture;
        GnumOfTimes = data.lecturePrices[i].totalTime;
        groupMax = data.lecturePrices[i].groupNumber;
        group = "on";
      }
    }

    let level = "입문";
    switch (data.difficultyType) {
      case "BASIC":
        level = "입문";
        break;
      case "BEGINNER":
        level = "초급";
        break;
      case "INTERMEDIATE":
        level = "중급";
        break;
      case "ADVANCED":
        level = "고급";
        break;
      default:
        level = "입문";
    }

    const valueSet = [
      data.content,
      level,
      data.introduce,
      data.subTitle,
      data.title,
      lecArr,
      langArr,
      lecKindId,
      online,
      offline,
      discuss,
      Pprice,
      Ptime,
      PnumOfTimes,
      Gprice,
      Gtime,
      GnumOfTimes,
      personal,
      group,
      groupMax,
      data.thumbnail,
    ];

    const name = [
      "content",
      "level",
      "introduction",
      "subheading",
      "maintitle",
      "classtype",
      "language",
      "classtypeId",
      "online",
      "offline",
      "discuss",
      "PpricePerHour",
      "PtimePerClass",
      "PnumOfTimes",
      "GpricePerHour",
      "GtimePerClass",
      "GnumOfTimes",
      "personal",
      "group",
      "groupMax",
      "image",
    ];

    for (let i = 0; i < name.length; i++) {
      let value = valueSet[i];

      console.log("value=", value);
      dispatch(
        ChangeField({
          form: "update",
          key: name[i],
          value,
        })
      );
    }
  }, [data, dispatch]);

  return <ClassRegistration distinct={2} lecID={id} />;
};

export default ClassEdit;
