import React from "react";
import styles from "./Content.module.scss";
import Image from "next/image";

function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.mentee_info}>
        <div className={styles.left_box}>
          <Image
            src={"/images/mentee_image.png"}
            width={"32px"}
            height={"32px"}
          />
          <div className={styles.name_box}>
            <span>박민지</span>
            <span className={styles.stars}>
              <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
              <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
              <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
              <Image src={"/images/star.svg"} width={"11px"} height={"11px"} />
              <Image
                src={"/images/half_star.svg"}
                width={"11px"}
                height={"11px"}
              />
            </span>
          </div>
        </div>
        <span>2021.07.01</span>
      </div>
      <h5>옵션1 : 온라인</h5>
      <h5>옵션2 : 그룹</h5>
      <p>
        {`질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼대로
        잘 따라갈 수 있도록 자세히 가르쳐주십니다.
        다른 수업도 듣고 싶어요:)`}
      </p>
    </div>
  );
}

export default Content;
