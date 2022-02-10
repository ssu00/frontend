import Image from "next/image";
import styles from "./logos.module.scss";
const ImageLogo = () => {
  return <Image src="/images/logo.png" width="56px" height="56px" alt="" />;
};

const TextLogo = () => {
  return <Image src="/images/textlogo.png" width="90px" height="46px" alt="" />;
};

const NameLogo = () => {
  return <span className={styles.tutorlabText}>@tutorlab</span>;
};
export { ImageLogo, TextLogo, NameLogo };
