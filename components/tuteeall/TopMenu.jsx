import React from "react";
import styles from "./TopMenu.module.scss";

function Topmenu() {
  return (
    <div className={styles.container}>
      <svg
        width="54"
        height="19"
        viewBox="0 0 54 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.34151 8.34282H14.9476V6.1969H7.21535C6.78458 6.1969 6.5692 5.99982 6.5692 5.62757V5.25532H14.6461V3.19699H6.5692V2.3211H14.8615V0.218971H3.66152V6.78812C3.63998 7.7078 4.47998 8.34282 5.34151 8.34282ZM5.06151 15.3499H7.83996V11.2332H10.7261V15.3499H13.5046V11.2332H17.6184V8.84645H4.50152C3.51075 8.84645 2.8646 8.62748 2.17537 7.88298L0 8.95594C1.05538 10.2917 2.56306 11.2332 4.2646 11.2332H5.06151V15.3499Z"
          fill="#2C343F"
        />
        <path
          d="M21.7073 11.6931H29.5257V9.30629H23.4519C23.0211 9.30629 22.8058 9.06542 22.8058 8.67128V7.35745H27.5011V4.97066H22.8058V3.15319H28.9657V0.766401H20.0058V10.007C20.0058 10.9705 20.8458 11.6931 21.7073 11.6931ZM34.6303 0H31.8088V5.14583H28.7073V7.57642H31.8088V12.0434C31.8088 13.0069 31.7011 13.7952 31.6365 14.2113L34.1134 15.4375C34.6519 14.3645 34.6303 12.5909 34.6303 11.9121V0Z"
          fill="#2C343F"
        />
        <path
          d="M41.3879 17.3106C41.3879 18.3637 42.187 19 43.094 19H52.402V10.8164H49.5297V12.4619H44.2602V10.8164H41.3879V17.3106ZM37.5654 2.72055H42.7485V3.81755H37.6086V7.92032C37.6086 8.88568 38.4509 9.6097 39.2931 9.6097H46.2255V7.21825H41.1504C40.6537 7.21825 40.5241 6.99885 40.5241 6.58199V6.09931H45.664V0.394919H37.5654V2.72055ZM49.8104 9.96074C50.048 8.97344 50.0696 8.60046 50.0696 7.34988V5.74827H51.2358V7.4157C51.2358 8.38106 51.1278 9.1709 51.063 9.58776L53.4818 10.8164C54.0217 9.74134 54.0001 7.9642 54.0001 7.28407V0H51.2358V3.18129H50.0696V0H47.3053V7.4157C47.3053 7.67899 47.3269 8.1836 47.1757 8.97344L49.8104 9.96074ZM44.2602 14.7875H49.5297V16.6305H44.8865C44.4114 16.6305 44.2602 16.455 44.2602 15.9942V14.7875Z"
          fill="#6595F4"
        />
      </svg>
      <div className={styles.centerbox}>
        <select name="location" id="location-select">
          <option value="">서울시 관악구</option>
        </select>
      </div>
      <div className={styles.rightbox}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 19.5H4.5V10C4.5 5.86 7.86 2.5 12 2.5C16.14 2.5 19.5 5.86 19.5 10V19.5Z"
            stroke="#2C343F"
            stroke-miterlimit="10"
          />
          <path
            d="M14.5 19C14.5 20.38 13.38 21.5 12 21.5C10.62 21.5 9.5 20.38 9.5 19"
            stroke="#2C343F"
            stroke-miterlimit="10"
          />
          <circle cx="21.5" cy="2.5" r="2.5" fill="#EE5A5A" />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1136_6767)">
            <g clip-path="url(#clip1_1136_6767)">
              <path
                d="M10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5Z"
                stroke="#2C343F"
                stroke-miterlimit="10"
              />
              <path
                d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z"
                stroke="#2C343F"
                stroke-miterlimit="10"
              />
              <path
                d="M10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5Z"
                stroke="#2C343F"
                stroke-miterlimit="10"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1136_6767">
              <rect width="24" height="24" fill="white" />
            </clipPath>
            <clipPath id="clip1_1136_6767">
              <rect
                width="24"
                height="5"
                fill="white"
                transform="translate(14.5) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Topmenu;
