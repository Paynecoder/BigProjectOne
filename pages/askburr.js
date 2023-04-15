import askGpt from "../hooks/askgpt.js";
import { useState } from "react";
import styles from "../styles/askburr.module.css";

export default function askBurr() {
  const { askBurr } = askGpt();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await askBurr(prompt);
    setResponse(response);
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Ask Burr</h1>
        <label htmlFor="prompt">
          Ask Burr a Question About the Environment:{" "}
        </label>
        <input
          type="text"
          id="prompt"
          name="prompt"
          value={prompt}
          autoComplete="off"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleSubmit}>Ask Burr</button>
        <p>
          {response || "Hi Im Burr! Ask me a question about the environment!"}
        </p>
      </main>
    </>
  );
}
