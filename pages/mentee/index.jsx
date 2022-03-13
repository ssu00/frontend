import Image from "next/image";
import { BottomTab } from "../../components/common";
import Breadcrumb from "../../components/mentee/breadcrumb";
import ClassCard from "../../components/mentee/classCard";
import Header from "../../components/mentee/header";
import SearchBox from "../../components/mentee/searchBox";
import classes from "../../mock/data.json";
import styles from "./menteeHome.module.scss";

const Home = () => {
  const filters = ["개발 언어", "수업 방식", "레벨"];

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
        <Breadcrumb filters={filters} />
        <p className={styles.classesCount}>
          총 {classes.classes.length}개의 강의
        </p>
        <div className={styles.classCards}>
          {classes.classes.map((classDetail, index) => (
            <ClassCard key={index} classDetail={classDetail} />
          ))}
        </div>
      </main>
      <BottomTab num={[1, 0, 0, 0]} />
    </div>
  );
};

export default Home;
