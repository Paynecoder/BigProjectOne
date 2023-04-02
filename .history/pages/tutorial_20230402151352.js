import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Tutorial.module.css";
import Button from "@/components/Button/index.js";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>Meet the Team</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.title_head}>
          <h1>Meet the Team!</h1>
        </div>
      </main>
    </>
  );
}
