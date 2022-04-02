import React from "react";
import { TopBar } from "../../../../../components/common";
import router from "next/router";
import { IC_Logo } from "../../../../../icons";

const edit = () => {
  return (
    <section>
      <TopBar
        text="후기 작성"
        onClick={() => {
          router.back();
        }}
      />
      <IC_Logo />
    </section>
  );
};

export default edit;
