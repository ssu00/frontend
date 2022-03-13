import { useEffect, useRef } from "react";
import { IC_Alarm, IC_LogoText, IC_Menu } from "../../icons";
import Dropdown from "./dropdown";
import styles from "./header.module.scss";

function Header() {
  const headerRef = useRef(null);

  const handleClickLogo = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const changeHeaderBackground = () => {
      if (window.scrollY > 0) headerRef.current.classList.add(styles.scroll);
      else headerRef.current.classList.remove(styles.scroll);
    };

    window.addEventListener("scroll", changeHeaderBackground);

    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <IC_LogoText className={styles.logo} onClick={handleClickLogo} />
      <Dropdown options={["서울시 관악구", "서울시 동작구"]} />
      <div className={styles.rightPannel}>
        <button aria-label="알람 확인">
          <IC_Alarm />
        </button>
        <button aria-label="메뉴 열기">
          <IC_Menu />
        </button>
      </div>
    </header>
  );
}

export default Header;
