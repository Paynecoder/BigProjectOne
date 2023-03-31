import Lottie from "lottie-react";
import animation from "@/public/lottie/burr-popup.json";
import styles from "./Popup.module.css";

export default function Popup({ paragraph, color }) {
  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.popupContainer}
          style={{
            backgroundColor: color,
          }}
        >
          <h1 className={styles.says}>Burr Says...</h1>
          <p className={styles.paragraph}>{paragraph}</p>
          <div>
            <p className={styles.next}>NEXT</p>
          </div>
        </div>
        <Lottie
          animationData={animation}
          loop={false}
          className={styles.animation}
          onComplete={() => {
            console.log("Animation complete");
          }}
        />
        <div className={styles.fadeBG}></div>
      </main>
    </>
  );
}
