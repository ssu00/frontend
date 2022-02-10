import styles from "./mainContent.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import router from "next/router";

const Empty = ({ id, title, tutor }) => {
  return (
    <tr>
      <td
        className={styles.title}
        onClick={() => router.push(`/classDetail/${id}`)}
      >
        {title}
      </td>
      <td
        className={styles.other}
        onClick={() => router.push(`/classDetail/${id}`)}
      >
        {tutor}
      </td>
      <td onClick={() => alert("승인하시겠습니까?")}>
        {id ? (
          <button type="button" className={styles.confirmBtn}>
            승인하기
          </button>
        ) : (
          <></>
        )}
      </td>
      <td onClick={() => prompt("거절 사유를 입력하세요!")}>
        {id ? (
          <button type="button" className={styles.denyBtn}>
            거절하기
          </button>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

const MainContent = () => {
  const [response, setResponse] = useState("");
  const ClassLists = async () => {
    try {
      setResponse(await axios.get("/tutors/mylectures"));
      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(() => {
    ClassLists();
  }, []);

  return (
    <section className={styles.mainContent}>
      <table className={styles.contentTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Title</th>
            <th>Tutor</th>
            <th>Confirm</th>
            <th>Deny</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {response.data ? (
            response.data.map((data) => {
              return <Empty id={data.id} title={data.title} key={data.id} />;
            })
          ) : (
            <></>
          )}
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </tbody>
      </table>
    </section>
  );
};

export default MainContent;
