import { IC_Edit, IC_Menu } from "../../../icons";
import router from "next/router";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>자유게시판</div>
      <div className={styles.rightPannel}>
        <button
          aria-label="글쓰기"
          onClick={() => router.push("/mentee/board/writeBoard")}
        >
          <IC_Edit />
        </button>
        <button aria-label="메뉴 열기">
          <IC_Menu />
        </button>
      </div>
    </header>
  );
}

export default Header;
