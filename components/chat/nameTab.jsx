import {useState} from 'react'
import router from "next/router";
import styles from "./nameTab.module.scss";
import { report } from 'process';
const NameTab = ({ name }) => {

  const [menuOpen,setMenuOpen] = useState(false)

  const report = () =>{
    if(confirm("신고하시겠습니까?")) {

      alert("신고접수가 완료되었습니다.");
    }
  }
  return (
    <section className={styles.nameSection}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.prev}
          onClick={() => router.push("/chatLists")}
        />
        <span className={styles.tutee}>튜티</span>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className={styles.right}>
        {/* <button
          type="button"
          className={styles.search}
          onClick={() => console.log("search")}
        /> */}
        {/* <button
          type="button"
          className={styles.menu}
          onClick={() => setMenuOpen(true)}
        /> */}
        <button style={{backgroundColor:"#fff",borderColor:"#fff"}} onClick={report}>신고</button>
      </div>
     
    </section>
  );
};

export default NameTab;
