import styles from "./SendField.module.css";
import askGpt from "@/hooks/askgpt";

export default function SendField({ onSend }) {
  const { prompt, setPrompt } = askGpt();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(prompt);
  };

  return (
    <>
      <main className={styles.main}>
        <input
          type="text"
          id="prompt"
          name="prompt"
          value={prompt}
          autoComplete="off"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleSubmit}>Ask Burr</button>
      </main>
    </>
  );
}