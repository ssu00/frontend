import React from "react";
import styles from "./menteeAll.module.scss";
import TopMenu from "../components/menteeall/TopMenu";
import ManImage from "../components/menteeall/ManImage";
import InPut from "../components/menteeall/InPut";
import Category from "../components/menteeall/Category";
import Filter from "../components/menteeall/Filter";
import Lecture from "../components/menteeall/Lecture";
import NavBar from "../components/menteeall/NavBar";
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
