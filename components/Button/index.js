import { useRef, useEffect } from "react";
import styles from "@/components/Button/Button.module.css";
import { useRouter } from "next/router";

export default function Button({ word, route }) {
  const buttonRef = useRef(null);
  const router = useRouter();

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

  const handleClick = () => {
    setTimeout(() => {
      router.push(route);
    }, 325);
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          ref={buttonRef}
          className={styles.buttonBody}
          onClick={handleClick}
        >
          {word}
        </button>
        <button className={styles.buttonShadow}>h</button>
      </div>
    </>
  );
}
