import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button/index.js";
import Landing from "@/components/LandingAnimation/index.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.animation}>
          <Landing />
        </div>
        <div className={styles.button}>
          <Button word={"Get Started"} />
        </div>
      </main>
    </>
  );
}
