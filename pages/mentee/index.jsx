import Image from "next/image";
import { BottomTab } from "../../components/common";
import * as cookie from "cookie";
import Breadcrumb from "../../components/mentee/breadcrumb";
import ClassCard from "../../components/mentee/classCard";
import Header from "../../components/mentee/header";
import SearchBox from "../../components/mentee/searchBox";
import classes from "../../mock/data.json";
import styles from "./menteeHome.module.scss";

import Drawer from "react-bottom-drawer";
import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Chip from "@mui/material/Chip";
import GetLecture from "../../core/api/Mentee/getLecture";

const Home = ({ classes, parsedCookies }) => {
  const filters = ["개발 분야", "수업 방식", "레벨"];
  const subjectsList = [
    "전체",
    "프론트엔드",
    "백엔드",
    "언어",
    "안드로이드",
    "IOS",
    "임베디드 | IOT",
    "데이터 사이언스",
    "빅데이터",
    "머신러닝 딥러닝",
    "블록체인",
    "데브옵스 | 인프라",
    "데이터베이스",
    "알고리즘 | 자료구조",
  ];
  const systemTypeList = ["전체", "온라인", "오프라인"];
  const isGroupList = ["전체", "개인 강의", "그룹 강의"];
  const difficultyTypesList = ["전체", "입문", "초급", "중급", "고급"];

  const [subjects, setSubjects] = useState(["전체"]);
  const [systemType, setSystemType] = useState(["전체"]);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("1");

  const handleSubjects = (label) => {
    if (label === "전체" || subjects === []) {
      setSubjects(["전체"]);
    } else if (!subjects.includes(label)) {
      setSubjects([...subjects.filter((el) => el !== "전체"), label]);
    } else if (subjects.includes(label)) {
      if (subjects.length === 1) {
        setSubjects(["전체"]);
      } else {
        setSubjects(subjects.filter((el) => el !== label));
      }
    }
  };
  console.log(subjects);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openDrawer = (tabValue) => {
    setIsVisible(true);
    setValue(tabValue.toString());
  };

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.background}>
        <div>
          <Image
            layout="fill"
            src="/images/background-gradient.jpg"
            alt="배경"
            priority
          />
        </div>
      </div>
      <Header />
      <main>
        <SearchBox />
        <Breadcrumb filters={filters} openDrawer={openDrawer} />
        <p className={styles.classesCount}>
          총 {classes.content.length}개의 강의
        </p>
        <div className={styles.classCards}>
          {classes.content.map((classDetail, index) => (
            <ClassCard key={index} classDetail={classDetail} />
          ))}
        </div>

        <Drawer
          isVisible={isVisible}
          onClose={onClose}
          className={styles.drawer}
        >
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              overflow: "hidden",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="개발 분야" value="1" />
                  <Tab label="수업 방식" value="2" />
                  <Tab label="레벨" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <span className={styles.filterlabel}>개발 분야</span>
                <div className={styles.chipcontainer}>
                  {subjectsList.map((subject, idx) => (
                    <Chip
                      key={idx}
                      label={subject}
                      color="primary"
                      onClick={() => handleSubjects(subject)}
                      style={{
                        backgroundColor: subjects.includes(subject)
                          ? "#689AFD"
                          : "white",
                        color: subjects.includes(subject) ? "white" : "black",
                        border: subjects.includes(subject)
                          ? ""
                          : "1px solid #E8EAEF",
                        marginTop: 12,
                        marginRight: 8,
                      }}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <span className={styles.filterlabel}>온·오프라인</span>
                <div>
                  {systemTypeList.map((type, idx) => (
                    <Chip
                      key={idx}
                      label={type}
                      color="primary"
                      style={{
                        backgroundColor: "#689AFD",
                        marginTop: 12,
                        marginRight: 8,
                      }}
                    />
                  ))}
                </div>
                <span className={styles.filterlabel}>개인·그룹</span>
                <div>
                  {isGroupList.map((group, idx) => (
                    <Chip
                      key={idx}
                      label={group}
                      color="primary"
                      style={{
                        backgroundColor: "#689AFD",
                        marginTop: 12,
                        marginRight: 8,
                      }}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="3">
                <span className={styles.filterlabel}>레벨</span>
                <div>
                  {difficultyTypesList.map((difficulty, idx) => (
                    <Chip
                      key={idx}
                      label={difficulty}
                      color="primary"
                      style={{
                        backgroundColor: "#689AFD",
                        marginTop: 12,
                        marginRight: 8,
                      }}
                    />
                  ))}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
          <Chip
            label="python"
            color="primary"
            style={{
              backgroundColor: "#689AFD",
              marginTop: 12,
              marginRight: 8,
            }}
          />
          <div className={styles.bottom}>
            <button className={styles.resetbutton}>초기화</button>
            <button className={styles.findbutton}>강의보기</button>
          </div>
        </Drawer>
      </main>

      <BottomTab num={[1, 0, 0, 0]} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  const classes = await GetLecture(parsedCookies.accessToken, 1);

  return {
    props: {
      classes: JSON.parse(JSON.stringify(classes)),
      parsedCookies,
    },
  };
};

export default Home;
