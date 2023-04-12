import styles from "../styles/Quiz.module.css";
import { useState, useEffect } from "react";
import { questions } from "../data/questions.js";
import Navbar from "../components/Navbar/index.js";
import Image from "next/image";
import Router from "next/router";
import usePopup from "@/hooks/usePopup";
import { useAnswers } from "@/hooks/answerContext";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState([...questions]);
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    setCurrentQuestionData(quizData[currentQuestion]);
    console.log(score);
  }, [currentQuestion]);

  const router = Router;
  const { renderPopup } = usePopup();
  const { answers, updateAnswers, updateScore } = useAnswers();

  const handleButtonClick = (button) => {
    button.classList.add(styles.buttonClicked);
    setTimeout(() => {
      button.classList.remove(styles.buttonClicked);
    }, 300);
  };

  function handlePopupTap() {
    if (currentQuestion === questions.length - 1) {
      if (
        selectedAnswer === currentQuestionData.correctAnswer ||
        selectedAnswer === currentQuestionData.correctAnswerTwo
      ) {
        router.push(`/results`);
      } else if (score === 1 || score === 6) {
        router.push(`/results/`);
      } else {
        router.push(`/results`);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setPopupOpen(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.progresscontainer}>
        <div
          className={styles.progress}
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>
      <main className={styles.main}>
        <div>
          <Image
            src={currentQuestionData.image}
            width={225}
            height={190}
            alt="question"
          />
        </div>
        <div className={styles.qtitlebox}>
          <h1 className={styles.title}>{currentQuestionData.title}</h1>
          <p>{currentQuestionData.question}</p>
        </div>
        <div className={styles.buttons}>
          {currentQuestionData.answers?.map((answer, index) => (
            <div className={styles.buttonContainer} key={index}>
              <button
                disabled={selectedAnswer}
                className={styles.buttonBody}
                onClick={(e) => {
                  setSelectedAnswer(answer);
                  updateAnswers({ questionId: currentQuestionData.id, answer });
                  if (
                    answer === currentQuestionData.correctAnswer ||
                    (currentQuestionData.correctAnswerTwo &&
                      currentQuestion === currentQuestionData.id)
                  ) {
                    updateScore();
                  } else {
                    setPopupOpen(true);
                  }
                  handleButtonClick(e.currentTarget);
                }}
              >
                {answer}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.popup} onClick={handlePopupTap}>
          {renderPopup(
            selectedAnswer,
            currentQuestionData,
            currentQuestionData.goodFeedback,
            currentQuestionData.badFeedback
          )}
        </div>
      </main>
    </>
  );
}
