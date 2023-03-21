import { useRef, useEffect } from "react";
import styles from "@/components/Button/Button.module.css";

export default function Button({ word }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      const buttonClicked = () => {
        button.classList.add(styles.buttonClicked);
        setTimeout(() => {
          button.classList.remove(styles.buttonClicked);
        }, 300);
      };
      button.addEventListener("click", buttonClicked);
      return () => {
        button.removeEventListener("click", buttonClicked);
      };
    }
  }, [buttonRef.current]);

  return (
    <>
      <div className={styles.buttonContainer}>
        <button ref={buttonRef} className={styles.buttonBody}>
          {word}
        </button>
        <button className={styles.buttonShadow}>h</button>
      </div>
    </>
  );
}
