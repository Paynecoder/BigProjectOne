import styles from "../styles/Quiz.module.css";
import { useState, useEffect } from "react";
import { questions } from "../data/questions.js";
import Navbar from "../components/Navbar/index.js";
import Image from "next/image";
import Button from "../components/Button/index.js";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([...questions]);
  const [currentQuestionData, setCurrentQuestionData] = useState({});

  let score = 0;
  useEffect(() => {
    setCurrentQuestionData(quizData[currentQuestion]);
  }, [currentQuestion]);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <Image src={currentQuestionData.image} width={225} height={225} />
        </div>
        <div className={styles.qtitlebox}>
          <h1 className={styles.title}>{currentQuestionData.title}</h1>
          <p>{currentQuestionData.question}</p>
        </div>
        <div>
          {currentQuestionData.answers?.map((answer, index) => (
            <Button key={index} word={answer} route={""} />
          ))}
        </div>
      </main>
    </>
  );
}
