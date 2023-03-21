import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/index.js";
import Button from "@/components/Button/index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.button}>
          <Button word="Button" />
        </div>
      </main>
    </>
  );
}
