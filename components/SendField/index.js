import styles from "./SendField.module.css";
import askGpt from "@/hooks/askgpt";

export default function SendField({ onSend }) {
  const { askBurr, prompt, setPrompt, response, setResponse } = askGpt();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSend(prompt);
    const response = await askBurr(prompt);
    setResponse(response);
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
