import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }
  imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);
      // Save current cursor state

      const resImage = await axios
        .post("/uploads/images", formData)
        .then(function (response) {
          return response.data.url;
        })
        .catch(function (error) {
          console.log(error);
        });

      const range = this.quill.getSelection(true);

      // Insert temporary loading placeholder image
      // this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

      // Move cursor to right side of image (easier to continue typing)
      this.quill.setSelection(range.index + 1);

      //const res = await this.apiPostNewsImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
      // Remove placeholder image

      // this.quill.deleteText(range.index, 1);

      // Insert uploaded image
      // this.quill.insertEmbed(range.index, 'image', res.body.image);
      console.log("resImage", resImage);
      this.quill.insertEmbed(range.index, "image", resImage);
    };
  }
  modules = {
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
        image: this.imageHandler,
      },
    },
  };

  formats = [
    //'font',
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

  render() {
    const { value, onChange } = this.props;
    return (
      <div style={{ height: "650px" }}>
        <ReactQuill
          style={{
            height: "650px",
            backgroundColor: "white",
            paddingBottom: "90px",
          }}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={value || ""}
          onChange={(content, delta, source, editor) =>
            onChange(editor.getHTML(), content, delta, source)
          }
        />
      </div>
    );
  }
}
export default EditorComponent;
