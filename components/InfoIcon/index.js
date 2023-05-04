import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./InfoIcon.module.css";

export default function InfoIcon() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/menupopup");
  };

  return (
    <div className={styles.info} onClick={handleClick}>
      <Image src="/menu-icon.png" alt="info" width={50} height={50} />
    </div>
  );
}
