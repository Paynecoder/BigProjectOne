import askGpt from "../hooks/askgpt.js";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/askburr.module.css";
import Navbar from "@/components/Navbar/index.js";
import burr from "@/public/favicon.svg";
import penguin from "@/public/icons/misc/penguin-pfp.svg";
import Image from "next/image.js";
import SendField from "@/components/SendField/index.js";
import Loader from "@/components/Loader/index.js";
import Head from "next/head";

export default function askBurr() {
  const {
    askBurr,
    setPrompt,
    setResponse,
    messagesRemaining,
    setMessagesRemaining,
    chat,
    setChat,
  } = askGpt();

  const [loading, setLoading] = useState(false);
  const endref = useRef(null);

  const handleUserInput = async (input) => {
    if (input === "") return;
    setPrompt(input);
    setLoading(true);

    if (messagesRemaining > 0) {
      setMessagesRemaining(messagesRemaining - 1);
      const newChat = [...chat, { prompt: input, response: "" }];
      setChat(newChat);

      const newResponse = await askBurr([newChat.length - 1].prompt);

      let responseIndex = 0;
      const typingEffectInterval = setInterval(() => {
        if (responseIndex < newResponse.length) {
          const updatedChat = [...newChat];
          updatedChat[newChat.length - 1].response = newResponse.substring(
            0,
            responseIndex + 1
          );
          setChat(updatedChat);
          responseIndex++;
        } else {
          clearInterval(typingEffectInterval);
          setLoading(false);
        }
      }, 27.5);
    } else {
      alert("You have reached the maximum number of messages!");
    }
  };

  const scrollToBottom = () => {
    endref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <>
      <Head>
        <title>Ask Burr</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
          {chat.map((message, index) => (
            <div key={index} className={styles.gptwrap}>
              <div className={styles.usrquestion}>
                <div className={styles.promptbubble}>{message.prompt}</div>
                <Image src={penguin} width={50} alt="user pfp" />
              </div>
              <div className={styles.response}>
                <Image src={burr} width={50} alt="burr pfp" />
                <div className={styles.responsebubble}>{message.response}</div>
              </div>
            </div>
          ))}
          <div ref={endref}></div>
        </div>
        <div className={styles.fieldwrap}>
          <SendField onSend={handleUserInput} />
          <div className={styles.bg}></div>
        </div>
        {loading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}
      </main>
    </>
  );
}
