import styles from "../styles/Quiz.module.css";
import { useState, useEffect } from "react";
import { questions } from "../data/questions.js";
import Navbar from "../components/Navbar/index.js";
import Image from "next/image";
import Router from "next/router";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([...questions]);
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [score, setScore] = useState(1);

  useEffect(() => {
    setCurrentQuestionData(quizData[currentQuestion]);
    console.log(score);
  }, [currentQuestion]);

  const router = Router;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <Image
            src={currentQuestionData.image}
            width={225}
            height={225}
            alt="question"
          />
        </div>
        <div className={styles.qtitlebox}>
          <h1 className={styles.title}>{currentQuestionData.title}</h1>
          <p>{currentQuestionData.question}</p>
        </div>
        <div>
          {currentQuestionData.answers?.map((answer, index) => (
            <button
              key={index}
              word={answer}
              route={""}
              onClick={() => {
                if (
                  answer === currentQuestionData.correctAnswer &&
                  currentQuestion === currentQuestionData.id
                ) {
                  setScore(score + 1);
                }
                if (
                  currentQuestion === questions.length - 1 &&
                  currentQuestionData.id === questions.length - 1
                ) {
                  if (answer === currentQuestionData.correctAnswer) {
                    router.push(`/results/visit-burr${score}`);
                  } else {
                    router.push(`/results/visit-burr${score - 1}`);
                  }
                } else {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
            >
              {answer}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
