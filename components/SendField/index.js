import styles from "./SendField.module.css";
import askGpt from "@/hooks/askgpt";
import question from "@/public/icons/misc/circle-question-solid.svg";
import send from "@/public/icons/misc/paper-plane-solid.svg";
import Image from "next/image";
import { useState } from "react";
import SamplePrompts from "../SamplePrompts";
import { useCallback } from "react";

export default function SendField({ onSend }) {
  const { prompt, setPrompt } = askGpt();
  const [open, setOpen] = useState(false);

  const [samplePromps, setSamplePromps] = useState([
    "Whats Recyling?",
    "Whats Global Warming?",
    "How can I help the environment?",
    "What do I do with my trash?",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSend(prompt);
    setPrompt("");
  };

  const handleSelect = useCallback((selectedPrompt) => {
    setPrompt(selectedPrompt);
    setOpen(false);
  }, []);

  return (
    <>
      {open && (
        <div className={styles.samplePromps}>
          <SamplePrompts onSelect={handleSelect} />
        </div>
      )}
      <main className={styles.main}>
        <Image
          src={question}
          width={40}
          onClick={() => setOpen(!open)}
          alt="question"
        />
        <input
          type="text"
          id="prompt"
          name="prompt"
          placeholder="Type your question here..."
          value={prompt}
          autoComplete="off"
          onChange={(e) => setPrompt(e.target.value)}
          onFocus={() => setOpen(false)}
        />
        <Image src={send} width={40} onClick={handleSubmit} alt="send" />
      </main>
    </>
  );
}
