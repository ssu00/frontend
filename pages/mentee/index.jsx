import Image from "next/image";
import { BottomTab } from "../../components/common";
import * as cookie from "cookie";
import Breadcrumb from "../../components/mentee/breadcrumb";
import ClassCard from "../../components/mentee/classCard";
import Header from "../../components/mentee/header";
import SearchBox from "../../components/mentee/searchBox";
import classes from "../../mock/data.json";
import styles from "./menteeHome.module.scss";
import { GetLecture } from "../../core/api/Lecture";
import Drawer from "react-bottom-drawer";
import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Chip from "@mui/material/Chip";

const Home = ({ classes, parsedCookies }) => {
  const filters = ["개발 언어", "수업 방식", "레벨"];
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("1");

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
          <Box sx={{ width: "100%", typography: "body1", height: "256px" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="개발 언어" value="1" />
                  <Tab label="수업 방식" value="2" />
                  <Tab label="레벨" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <span>개발 언어</span>
                <div>
                  <Chip
                    label="python"
                    color="primary"
                    style={{ backgroundColor: "#689AFD" }}
                  />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <span>온 오프라인</span>
                <div>
                  <Chip
                    label="python"
                    color="primary"
                    style={{ backgroundColor: "#689AFD" }}
                  />
                </div>
                <span>개인 그룹</span>
                <div>
                  <Chip
                    label="python"
                    color="primary"
                    style={{ backgroundColor: "#689AFD" }}
                  />
                </div>
              </TabPanel>
              <TabPanel value="3">
                <span>레벨</span>
                <div>
                  <Chip
                    label="python"
                    color="primary"
                    style={{ backgroundColor: "#689AFD" }}
                  />
                </div>
              </TabPanel>
            </TabContext>
          </Box>
          <Chip
            label="python"
            color="primary"
            style={{ backgroundColor: "#689AFD" }}
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
      classes,
      parsedCookies,
    },
  };
};

export default Home;
