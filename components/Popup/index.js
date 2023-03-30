import styles from "./Popup.module.css";

export default function Popup({ paragraph, color }) {
  return (
    <>
      <main
        className={styles.main}
        style={{
          backgroundColor: color,
        }}
      >
        <h1 className={styles.says}>Burr Says...</h1>
        <p className={styles.paragraph}>{paragraph}</p>
        <div>
          <p className={styles.next}>NEXT</p>
        </div>
      </main>
    </>
  );
}
