import { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { ChangeField } from "../../../core/redux/reducers/update";
const Dynamic = dynamic(
  () => {
    return import("./EditorComponent");
  },
  { ssr: false }
);

const Quill = ({ form, token }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(form.content);
  const onChange = (e, content, delta, source) => {
    var value = e;
    setContent(e);
    dispatch(
      ChangeField({
        form: "classInfo",
        key: "content",
        value,
      })
    );
  };
  return <Dynamic value={content} onChange={onChange} token={token} />;
};

export default Quill;
