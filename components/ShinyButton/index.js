import { useRef, useEffect } from "react";
import styles from "@/components/ShinyButton/ShinyButton.module.css";
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
      const handleMouseMove = (event) => {
        const button = buttonRef.current;
        if (button) {
          const rect = button.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const x = (event.clientX - centerX) / (rect.width / 2);
          const y = (event.clientY - centerY) / (rect.height / 2);
          button.style.backgroundPosition = `${50 + x * 15}% ${50 + y * 15}%`;
        }
      };

      button.addEventListener("mousemove", handleMouseMove);
      return () => {
        button.removeEventListener("click", buttonClicked);
        button.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [buttonRef.current]);

  const handleClick = () => {
    setTimeout(() => {
      router.push(route);
    }, 300);
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
      </div>
    </>
  );
}
