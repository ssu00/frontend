import Image from "next/image";
import styles from "./logos.module.scss";
const ImageLogo = () => {
  return <Image src="/icons/logo.svg" width="56px" height="56px" alt="" />;
};

const TextLogo = () => {
  return <Image src="/icons/logo_text.png" width="90px" height="46px" alt="" />;
};

const NameLogo = () => {
  return <span className={styles.mentoridgeTextLogo}>@mentoridge</span>;
};
export { ImageLogo, TextLogo, NameLogo };
