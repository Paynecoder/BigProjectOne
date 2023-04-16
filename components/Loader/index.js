import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
