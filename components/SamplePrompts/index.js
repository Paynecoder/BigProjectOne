import styles from "./SamplePrompts.module.css";
import askGpt from "@/hooks/askgpt";

export default function SamplePrompts({ onSelect }) {
  const samplePromps = [
    "Whats Recyling?",
    "Whats Global Warming?",
    "How can I help the environment?",
    "What do I do with my trash?",
  ];
  const { setPrompt } = askGpt();

  return (
    <>
      <main className={styles.main}>
        {samplePromps.map((prompt, index) => (
          <button
            key={index}
            onClick={() => {
              setPrompt(prompt);
              onSelect(prompt);
            }}
            className={styles.button}
          >
            {prompt}
          </button>
        ))}
      </main>
    </>
  );
}
