import styles from "./modal.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const Element = ({ text, num, onChange }) => {
  return (
    <label htmlFor={text}>
      <div onClick={onChange} className={styles.signupElement}>
        {text}
        <input
          type="radio"
          name={
            num == 1
              ? "stateElement1"
              : num == 2
              ? "stateElement2"
              : num == 3
              ? "stateElement3"
              : ""
          }
          value={text}
          id={text}
        />
      </div>
    </label>
  );
};

const Modal = ({ form, onChange }) => {
  const [state, setState] = useState("");
  const [num, setNum] = useState(0);
  const [select, setSelect] = useState("");

  useEffect(() => {
    const large = document.getElementById("large");
    const medium = document.getElementById("medium");
    const small = document.getElementById("small");
    large.onclick = async function () {
      setNum(1);
      await axios
        .get("/addresses/states")
        .then((response) => setState(response));
      setSelect("L");
    };

    medium.onclick = async function () {
      setNum(2);
      if (large.value != "시" && large.value != undefined) {
        await axios
          .get("/addresses/siGunGus", {
            params: {
              state: large.value == "시" ? "" : large.value,
            },
          })
          .then((response) => setState(response));
        setSelect("M");
      }
    };

    small.onclick = async function () {
      setNum(3);
      if (
        large.value != "시" &&
        large.value != undefined &&
        medium.value != "군" &&
        medium.value != undefined
      ) {
        await axios
          .get("/addresses/dongs", {
            params: {
              state: large.value == "시" ? "" : large.value,
              siGunGu: medium.value == "군" ? "" : medium.value,
            },
          })
          .then((response) => setState(response));
        setSelect("S");
      }
    };
  }, [state]);

  return (
    <section className={styles.stateModal}>
      {state.data?.map((data, i) => {
        return num == 1 && select == "L" ? (
          <Element
            text={data.value}
            key={i}
            num={1}
            onChange={onChange("stateL")}
            i={i}
          />
        ) : num == 2 && select == "M" ? (
          <Element
            text={data.value}
            key={i}
            num={2}
            onChange={onChange("stateM")}
            i={i}
          />
        ) : num == 3 && select == "S" ? (
          <Element
            text={data.value}
            key={i}
            num={3}
            onChange={onChange("stateS")}
            i={i}
          />
        ) : (
          <></>
        );
      })}
    </section>
  );
};
export default Modal;
