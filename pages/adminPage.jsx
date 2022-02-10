import SideBar from "../components/admin/sideBar";
import TopBar from "../components/admin/topBar";
import MainContent from "../components/admin/mainContent";
import styles from "./admin.module.scss";
const Admin = () => {
  return (
    <section className={styles.admin}>
      <SideBar></SideBar>
      <div className={styles.adminContents}>
        <TopBar></TopBar>
        <MainContent></MainContent>
      </div>
    </section>
  );
};

export default Admin;
