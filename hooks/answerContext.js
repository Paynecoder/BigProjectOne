import { createContext, useContext, useState, useEffect } from "react";

const AnswersContext = createContext();

export function useAnswers() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const updateAnswers = (answer) => {
    if (answer !== null) {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
  };

  const resetUser = () => {
    setAnswers([]);
    setScore(0);
  };

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };
  return (
    <AnswersContext.Provider
      value={{
        answers,
        updateAnswers,
        updateScore,
        score,
        resetUser,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
}
