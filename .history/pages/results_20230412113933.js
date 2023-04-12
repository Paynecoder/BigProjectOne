import styles from "../styles/Results.module.css";
import { useAnswers } from "@/hooks/answerContext";
import { questions } from "../data/questions.js";
import Button from "../components/Button/index.js";
import Image from "next/image";

export default function Results() {
  const { answers, score } = useAnswers();

  function getImage(score) {
    switch (score) {
      case 0:
        return "/results/1.png";
      case 1:
        return "/results/1.png";
      case 2:
        return "/results/2.png";
      case 3:
        return "/results/3.png";
      case 4:
        return "/results/4.png";
      case 5:
        return "/results/5.png";
      default:
        return "/results/1.png";
    }
  }

  function getTitle(score) {
    switch (score) {
      case 0:
        return "We all start somewhere!";
      case 1:
        return "We all start somewhere!";
      case 2:
        return "You got this!";
      case 3:
        return "Good work!";
      case 4:
        return "You're doing Great!";
      case 5:
        return "You're a hero!";
      default:
        return "Take the Quiz to find out!";
    }
  }

  function getDesc(score) {
    switch (score) {
      case 0:
        return "It's never too late to start making a difference. By making eco-friendly choices and promoting sustainability, you can help save the polar bears and protect our planet. You have the power to be a hero, so let's start today!";
      case 1:
        return "It's never too late to start making a difference. By making eco-friendly choices and promoting sustainability, you can help save the polar bears and protect our planet. You have the power to be a hero, so let's start today!";
      case 2:
        return "There's always room for improvement, but your efforts to live sustainably are commendable. By being mindful of your impact on the environment, you are helping to preserve it for future generations. Keep it up!";
      case 3:
        return "Keep up the good work! Your commitment to making eco-friendly choices and promoting sustainability is making a difference. You are a role model for others and a true champion for our planet.";
      case 4:
        return "Well done! Your actions to live sustainably and protect the environment are truly inspiring. By reducing your carbon footprint, you are helping to save the polar bears and keep our planet healthy for future generations.";
      case 5:
        return "Congratulations on being a hero in the fight against climate change! Your actions towards a more sustainable lifestyle are making a real difference and helping to save our planet, including the precious polar bears. Keep up the great work!";
      default:
        return "Take the Quiz to find out!";
    }
  }

  const imagesrc = getImage(score);
  const title = getTitle(score);
  const desc = getDesc(score);

  return (
    <div className={styles.main}>
      <Image src={imagesrc} width={230} height={300} />
      <h1>{title}</h1>
      <h2>Score: {score}</h2>
      <p>{desc}</p>
      {score === 0 && <h2>Take the quiz!</h2>}
      {answers.map((answer, index) => {
        const question = questions.find((q) => q.id === answer.questionId);
        const isCorrect =
          answer.answer === question.correctAnswer ||
          answer.answer === question.correctAnswerTwo;

        return (
          <div key={index}>
            <h3>{question.title}</h3>
            <p>{isCorrect ? question.isRight : question.isWrong}</p>
          </div>
        );
      })}
      <div>
        {score > 0 && (
          <Button word={"Visit Burr!"} route={`/results/visit-burr${score}`} />
        )}
      </div>
    </div>
  );
}
