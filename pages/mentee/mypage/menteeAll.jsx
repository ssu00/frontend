import React from "react";
import styles from "./menteeAll.module.scss";
import TopMenu from "../../../components/mentee/lectureDetailIntro/TopMenu";
import ManImage from "../../../components/mentee/menteeall/ManImage";
import InPut from "../../../components/mentee/menteeall/InPut";
import Category from "../../../components/mentee/menteeall/Category";
import Filter from "../../../components/mentee/menteeall/Filter";
import Lecture from "../../../components/mentee/menteeall/Lecture";
import NavBar from "../../../components/mentee/menteeall/NavBar";
function tuteeAll() {
  return (
    <>
      <section className={styles.tuteeAllSection}>
        <TopMenu />
        <ManImage />
        <InPut />
        <Category />
        <Filter />
        <Lecture />
        <NavBar />
      </section>
    </>
  );
}

export default tuteeAll;
