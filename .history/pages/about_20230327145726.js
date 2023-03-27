import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
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
        <div className={styles.team_member}>
          <img src="https://via.placeholder.com/100" alt="Team Member 1" />
          <div>
            <h3>Aaron Tripp</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <img src="https://via.placeholder.com/100" alt="Team Member 2" />
          <div>
            <h3>Carter Vandekamp</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <img src="https://via.placeholder.com/100" alt="Team Member 3" />
          <div>
            <h3>Joshua Payne</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
