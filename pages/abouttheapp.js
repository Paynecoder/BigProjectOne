import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/AboutTheApp.module.css";
import Button from "@/components/Button/index.js";
import Navbar from "@/components/Navbar";
import LineChart from "@/components/LineChart";

export default function About() {
  return (
    <>
      <Head>
        <title>About the App</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.title_head}>
          <p>About the App</p>
        </div>
        <div className={styles.title_desc}>
          <p>
            Brilliant is an educational app designed to teach in an enjoyable
            yet intuitive way. Our main goal is to spread awareness about
            climate change issues, such as changes in arctic sea ice, and how we
            can help prevent it.
          </p>
          <LineChart />
          <p>
            We would love for you to do our quiz and learn more about climate
            change and how you can do your part. Keep an eye on our beloved
            polar bear, Burr, as his outfit and environment will change based on
            your answers.
          </p>
          <br />
          <p>Have fun! We are excited to have you.</p>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <Button word={"Climate Quiz"} route={"/quiz"} />
          </div>
        </div>
      </main>
    </>
  );
}
