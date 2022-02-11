import React from "react";
import styles from "./tuteeAll.module.scss";
import TopMenu from "../components/tuteeall/TopMenu";
import ManImage from "../components/tuteeall/ManImage";
import InPut from "../components/tuteeall/InPut";
import Category from "../components/tuteeall/Category";
import Filter from "../components/tuteeall/Filter";
import Lecture from "../components/tuteeall/Lecture";
import NavBar from "../components/tuteeall/NavBar";
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
