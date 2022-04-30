import React, { useState, useRef } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import Image from "next/image";
import classNames from "classnames";
import styles from "./imgSubmitBlock.module.scss";
import UploadImage from "../../../core/api/Image/uploadImage";
import { basicBtnStyle, canvasPreview, useDebounceEffect } from "../../common";
import { IC_PlusCircle } from "../../../icons";

const centerAspectCrop = (mediaWidth, mediaHeight, aspect) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
};

const ImgCrop = ({ value, handleChange, token }) => {
  const [crop, setCrop] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [completedCrop, setCompletedCrop] = useState();
  const [aspect, setAspect] = useState(330 / 277);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const previewCanvasRef = useRef(null);
  const [croppedUrl, setCroppedUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [imgType, setImgType] = useState("");
  let testCrop = "";
  const imgRef = useRef(null);
  const inputRef = useRef(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () =>
        setImgSrc(reader.result.toString() || "")
      );
      setFileName(e.target.files[0].name);
      setImgType(e.target.files[0].type);
    }
  };

  const onImageLoad = (e) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop?.width * scaleX;
    canvas.height = crop?.height * scaleY;
    const ctx = canvas?.getContext("2d");

    ctx.drawImage(
      image,
      crop?.x * scaleX,
      crop?.y * scaleY,
      crop?.width * scaleX,
      crop?.height * scaleY,
      0,
      0,
      crop?.width * scaleX,
      crop?.height * scaleY
    );
    return new Promise((resolve) => {
      resolve(canvas.toDataURL());
    });
  };

  const onCropComplete = async () => {
    await makeClientCrop(completedCrop);
  };

  const makeClientCrop = async (crop) => {
    if (imgRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imgRef.current, crop);
      setCroppedUrl(croppedImageUrl);
      testCrop = croppedImageUrl;
    }
  };

  const DataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0]?.split(":")[1]?.split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  return (
    <div className={styles.imgSubmitSection}>
      {value != "" ? (
        <Image
          src={value}
          width={330}
          height={277}
          className={styles.imgSubmitBlock}
        />
      ) : imgSrc ? (
        <ReactCrop
          crop={crop}
          aspect={aspect}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          ruleOfThirds
          className={styles.imgSubmitBlock}
        >
          <img ref={imgRef} src={imgSrc} onLoad={onImageLoad} />
        </ReactCrop>
      ) : (
        <label htmlFor="imgSubmit" className={styles.imgSubmitBlock}>
          <IC_PlusCircle width="20" height="20" />
          <p className={styles.sizeText}>
            가로:330px
            <br />
            세로:277px
          </p>
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        id="imgSubmit"
        ref={inputRef}
      />

      <div className={styles.btnSection}>
        <button
          type="button"
          className={classNames(styles.submitBtn, basicBtnStyle.btn_white)}
          onClick={() => {
            handleChange("image", "");
            setImgSrc("");
            inputRef.current.click();
          }}
        >
          다른 파일 선택하기
        </button>
        <button
          type="button"
          className={classNames(styles.submitBtn, basicBtnStyle.btn_blue)}
          onClick={async () => {
            await onCropComplete();
            const file = DataURIToBlob(testCrop);
            let file2 = new File([file], fileName, { type: imgType });
            const formData = new FormData();
            formData.append("file", file2);
            const res = await UploadImage(formData, token);
            if (res.status == 200) {
              handleChange("image", res.data.url);
            }
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default ImgCrop;
