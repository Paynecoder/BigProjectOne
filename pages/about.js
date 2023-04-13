import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import Button from "@/components/Button/index.js";
import Navbar from "@/components/Navbar";
import josh from "@/public/Avatars/joshburrua.png";
import aaron from "@/public/Avatars/burron.png";
import carter from "@/public/Avatars/cartburr.png";

export default function About() {
  return (
    <>
      <Head>
        <title>Meet the Team</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.title_head}>
          <h1>Meet the Team!</h1>
        </div>
        <div className={styles.team_member}>
          <Image src={aaron} alt="Team Member 1" width={100} />
          <div>
            <h3>🎨 Aaron - The Artful Illusionist 🎨</h3>
            <p>
              Behold Aaron, our in-house artistic illusionist, who dazzles with
              his ability to transmute even the dullest concepts into visually
              captivating masterpieces. With a stroke of his brush (or stylus),
              Aaron breathes life into our app, creating vibrant worlds and
              playful characters.
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <Image src={carter} alt="Team Member 2" width={100} />
          <div>
            <h3>🔮 Carter - The UX/UI Enchanter 🔮</h3>
            <p>
              Meet Carter, the UX/UI Enchanter who mesmerizes with seamless
              navigation and delightful user experiences. With a flick of his
              wand (and a dash of user feedback), Carter ensures that your
              journey is as intuitive as it is enjoyable.
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <Image src={josh} alt="Team Member 3" width={100} />
          <div>
            <h3>🌟 Joshua - The Code Magician 🌟</h3>
            <p>
              Introducing Joshua, the mystical maestro of ones and zeros! With
              the finesse of a master programmer, he artfully transforms
              caffeine into code, weaving complex spells into our app's very
              essence.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
