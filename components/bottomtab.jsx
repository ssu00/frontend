import Image from "next/image";
import styles from "./bottomtab.module.scss";
import router from "next/router";

const BottomTab = ({ num }) => {
  return (
    <>
      <ul className={styles.tab}>
        <button
          type="button"
          onClick={() => router.push("/myclass")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src={
                  num == 1
                    ? "/newImage/bottom_home_blue.svg"
                    : "/newImage/bottom_home.svg"
                }
                width="24px"
                height="24px"
                margin="0"
                alt="홈"
                className={styles.img}
              />
            </div>
            <span>홈</span>
          </li>
        </button>

        {/* <button
          type="button"
          onClick={() => router.push("/board")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src="/images/board.png"
                width="23px"
                height="23px"
                alt="게시판"
                className={styles.img}
              />
            </div>
            <span>게시판</span>
          </li>
        </button> */}

        <button
          type="button"
          onClick={() => router.push("/chatLists")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src={
                  num == 2
                    ? "/newImage/bottom_chat_blue.svg"
                    : "/newImage/bottom_chat.svg"
                }
                width="24px"
                height="24px"
                alt="채팅리스트"
                className={styles.img}
              />
            </div>
            <span>채팅</span>
          </li>
        </button>

        <button
          type="button"
          onClick={() => router.push("/mypage")}
          className={styles.elements}
        >
          <li>
            <div className={styles.img}>
              <Image
                src={
                  num == 3
                    ? "/newImage/bottom_mypage_blue.svg"
                    : "/newImage/bottom_mypage.svg"
                }
                width="24px"
                height="24px"
                alt="마이페이지"
              />
            </div>
            <span>마이페이지</span>
          </li>
        </button>
      </ul>
    </>
  );
};
export default BottomTab;
