import React from "react";
import styles from "./imgCrop.module.scss";
import { useDispatch } from "react-redux";
import { ChangeField } from "../../../redux/reducers/update";

import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";

import { generateDownload } from "../btn_inputs/utils/cropImage";
import axios from "axios";
import Image from "next/image";
export default function ImageCrop() {
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [cropSize, setCropSize] = React.useState({ width: 330, height: 141 });
  const [fileName, setFileName] = React.useState("");
  const [imgType, setImgType] = React.useState("");

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      setFileName(event.target.files[0].name);
      setImgType(event.target.files[0].type);
    }
  };

  const onDownload = () => {
    const url = generateDownload(image, croppedArea); //crop된 이미지 반환
    return url;
  };

  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
  const dispatch = useDispatch();
  return (
    <div className={image ? styles.add : styles.add2}>
      <div className={styles.container}>
        <div className={styles.containerCropper}>
          {image ? (
            <div className={styles.cropper}>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={330 / 141}
                cropSize={cropSize}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                className={styles.realcrop}
              />
            </div>
          ) : (
            <label htmlFor="classImg">
              <div className={styles.pluspic}>
                <Image
                  src="/images/plus.png"
                  width="16px"
                  height="16px"
                  alt="강의 대표 이미지를 추가하세요"
                />
              </div>
              <p className={styles.placeholdertext}>
                가로:00px 세로:00px(00바이트 이내)
              </p>
            </label>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
          id="classImg"
        />
        {image ? (
          <>
            <div className={styles.slider}>
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <span className={styles.btnContainer}>
              <button
                type="button"
                onClick={triggerFileSelectPopup}
                className={styles.btnForImage}
              >
                다른 파일 선택하기
              </button>
              <button
                type="button"
                className={styles.btnForImage}
                onClick={async () => {
                  const formData = new FormData();
                  const testurl = await onDownload();
                  const file = DataURIToBlob(testurl);
                  var file3 = new File([file], fileName, { type: imgType });
                  formData.append("file", file3);
                  setTimeout(function () {
                    let resImg = "";
                    resImg = axios
                      .post("/uploads/images", formData)
                      .then((response) => {
                        let value = response.data.url;
                        dispatch(
                          ChangeField({
                            form: "update",
                            key: "image",
                            value,
                          })
                        );
                        return response.data.url;
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }, 500);
                }}
              >
                편집 완료
              </button>
            </span>{" "}
            <strong className={styles.caution}>
              * 이미지 편집 후, 꼭 편집 완료 버튼을 눌러주셔야 저장됩니다.
            </strong>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
