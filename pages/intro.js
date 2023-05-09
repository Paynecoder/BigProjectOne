import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Intro.module.css";
import Button from "@/components/Button/index.js";
import ShinyButton from "@/components/ShinyButton/index.js";
import Navbar from "@/components/Navbar";
import Iceberg from "@/components/Iceberg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brrrilliant</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />

        <div className={styles.iceberg}>
          <Iceberg />
        </div>

        <div className={styles.message}>
          <h1>Did you know?</h1>
          <p>
            Polar bears have been considered a threatened species in the
            <b> endangered species</b> act since 2008. Find out how you can help
            by taking the quiz below!
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <Button word={"Climate Quiz"} route={"/quiz"} />
          </div>
          {/* <div className={styles.button}>
            <Button word={"Talk to Burr"} route={"/askburr"} />
          </div> */}
        </div>
        <Link href="/about">
          <div className={styles.about}>LEARN MORE</div>
        </Link>
      </main>
    </>
  );
}
