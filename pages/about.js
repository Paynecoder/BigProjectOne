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
          <h1 style={{ fontWeight: 900 }}>Meet the Team!</h1>
        </div>
        <div className={styles.team_member}>
          <Image src={aaron} alt="Team Member 1" width={100} />
          <div>
            <h3>🎨 Aaron - Visual Artist</h3>
            <p>
              Behold Aaron Tripp, our primary visual designer. Aaron is the
              creator of all character icons, illustrations, and animations that
              bring Brrrilliant to life!
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <Image src={carter} alt="Team Member 2" width={100} />
          <div>
            <h3>🔮 Carter - UI/UX Specialist</h3>
            <p>
              Meet Carter Vandekamp, our head UI/UX designer. Carter is
              responsible for discovering exactly what features are key to
              enhancing our page navigation and layout to create the most
              delightful user experience.
            </p>
          </div>
        </div>
        <div class={styles.team_member}>
          <Image src={josh} alt="Team Member 3" width={100} />
          <div>
            <h3>🌟 Joshua - Frontend Wizard</h3>
            <p>
              Introducing Joshua Payne. If you can think it, he can code it.
              Joshua is the driving force that helps us implement advanced
              interactive features such as AI integration and reliable,
              efficient code.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
