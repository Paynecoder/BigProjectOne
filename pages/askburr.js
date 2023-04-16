import askGpt from "../hooks/askgpt.js";
import { useState } from "react";
import styles from "../styles/askburr.module.css";
import Navbar from "@/components/Navbar/index.js";
import burr from "@/public/favicon.svg";
import penguin from "@/public/icons/misc/penguin-pfp.svg";
import Image from "next/image.js";
import SendField from "@/components/SendField/index.js";

export default function askBurr() {
  const {
    askBurr,
    prompt,
    setPrompt,
    response,
    setResponse,
    messagesRemaining,
    setMessagesRemaining,
  } = askGpt();
  const [loading, setLoading] = useState(false);

  const handleUserInput = async (input) => {
    setPrompt(input);
    if (messagesRemaining > 0) {
      setMessagesRemaining(messagesRemaining - 1);
      setLoading(!loading);
      const newResponse = await askBurr(input);
      setResponse(newResponse);
      setLoading(!loading);
    } else {
      alert("No Tokens");
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Ask Burr</h1>
          <p className={styles.desc}>
            Feel free to ask Burr any questions you have about climate change!
          </p>
        </div>
        <h3>Messages Remaining: {messagesRemaining}</h3>
        <div className={styles.chatbox}>
          <div className={styles.burrgreet}>
            <Image src={burr} width={50} alt="burr pfp" />
            <div className={styles.greetbubble}>
              Hi, I'm Burr! Ask me a question about the environment!
            </div>
          </div>
          {prompt != "" && (
            <div className={styles.usrquestion}>
              <div className={styles.promptbubble}>{prompt}</div>
              <Image src={penguin} width={50} alt="user pfp" />
            </div>
          )}
          {response != "" && (
            <div className={styles.response}>
              <Image src={burr} width={50} alt="burr pfp" />
              <div className={styles.responsebubble}>{response}</div>
            </div>
          )}
        </div>
        <div className={styles.fieldwrap}>
          <SendField onSend={handleUserInput} />
          <div className={styles.bg}></div>
        </div>
      </main>
    </>
  );
}
