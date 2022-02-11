import React from "react";
import styles from "./NavBar.module.scss";
function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.list_box}>
        <div className={styles.item}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 7.5L10 1.5L0.5 7.5V20.5H7.5V16C7.5 14.62 8.62 13.5 10 13.5C11.38 13.5 12.5 14.62 12.5 16V17.5V20.5H19.5V7.5Z"
              fill="#6595F4"
              stroke="#6595F4"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          <span>홈</span>
        </div>
        <div className={styles.item}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 8.5L8.5 8.51004V8.52004L15.5 8.51V8.5Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M15.5 12L8.5 12.01V12.02L15.5 12.01V12Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M15.5 15.5L8.5 15.51V15.52L15.5 15.51V15.5Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path d="M3.5 2.5H20.5V21.5H3.5V2.5Z" stroke="#949BAD" />
          </svg>

          <span>자유게시판</span>
        </div>
        <div className={styles.item}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 4V12V16H11H10.7L10.45 16.17L6 19.13V17V16H5H2V4H12H22ZM23 3H12H1V17H5V21L11 17H23V12V3Z"
              fill="#949BAD"
            />
            <path
              d="M17.5 8.45996L6.5 8.46996V8.47996L17.5 8.45996Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
            />
            <path
              d="M15.5 11.9302L6.5 11.9402V11.9502L15.5 11.9302Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
            />
          </svg>
          <span>채팅</span>
        </div>
        <div className={styles.item}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 11.5C14.4853 11.5 16.5 9.48528 16.5 7C16.5 4.51472 14.4853 2.5 12 2.5C9.51472 2.5 7.5 4.51472 7.5 7C7.5 9.48528 9.51472 11.5 12 11.5Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
            />
            <path
              d="M21.5 18.5L15.5 13.5H8.5L2.5 18.5V21.5H21.5V18.5Z"
              stroke="#949BAD"
              stroke-miterlimit="10"
            />
          </svg>
          <span>마이페이지</span>
        </div>

        <div className={styles.indicator}></div>
      </div>
    </div>
  );
}

export default NavBar;
