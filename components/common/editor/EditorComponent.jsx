import React, { useRef, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { uploadImage } from "../../../core/api/Image";

const EditorComponent = ({ value, onChange, token }) => {
  const quillRef = useRef();
  const input = document.createElement("input");

  const imageHandler = () => {
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const range = quillRef.current?.getEditor().getSelection()?.index;
      if (range !== null && range !== undefined) {
        let quill = quillRef.current?.getEditor();
        quill.setSelection(range + 1);
        const resImage = await uploadImage(formData, token);
        quill.insertEmbed(range, "image", resImage.data.url);
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: "1" },
            { header: "2" },
            { header: [3, 4, 5, 6] },
            { font: [] },
          ],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["link", "image"],
          ["clean"],
          ["code-block"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <div style={{ height: "650px" }}>
      <ReactQuill
        ref={quillRef}
        style={{
          height: "650px",
          backgroundColor: "white",
          paddingBottom: "90px",
        }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ""}
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML(), content, delta, source)
        }
      />
    </div>
  );
};
export default EditorComponent;
