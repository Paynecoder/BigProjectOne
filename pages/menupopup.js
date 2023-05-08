import Head from "next/head";
import styles from "@/styles/MenuPopUp.module.css";
import Button from "@/components/ShinyButton/index.js";
import Navbar from "@/components/Navbar";

export default function MenuPopup() {
  return (
    <>
      <Head>
        <title>Burr's Habitat</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.title_head}>
          <p>Your Impact Matters.</p>
        </div>
        <div className={styles.title_desc}>
          <p>
            Burr’s habitat changes based on your quiz results. The higher you
            score, the more populated his home will be. Every choice you make
            throughout your day has an impact on the world around you.
          </p>
        </div>
        <div className={styles.title_desc}>
          <p>
            Still have questions about the environment? Why don’t you talk to
            Burr himself?
          </p>
        </div>
        <div className={styles.button}>
          <Button word={"Talk to Burr"} route={"/askburr"} />
        </div>
      </main>
    </>
  );
}
