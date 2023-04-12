import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AnswersContext = createContext();

export function useAnswers() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const updateAnswers = (answer) => {
    if (answer !== null) {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
  };

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <AnswersContext.Provider
      value={{ answers, updateAnswers, updateScore, score }}
    >
      {children}
    </AnswersContext.Provider>
  );
}
