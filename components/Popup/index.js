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
        <h1>Burr Says...</h1>
        <p>{paragraph}</p>
      </main>
    </>
  );
}
