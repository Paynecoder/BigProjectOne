import Image from "next/image";
import styles from "./Iceberg.module.css";

export default function Iceberg() {
  return (
    <>
      <main className={styles.main}>
        <Image
          src="/icons/misc/burr-iceberg.svg"
          alt="iceberg"
          width={200}
          height={250}
        />
      </main>
    </>
  );
}
