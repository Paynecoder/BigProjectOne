import { createContext, useContext, useState, useEffect } from "react";

const AnswersContext = createContext();

export function useAnswers() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);

  const updateAnswers = (answer) => {
    if (answer !== null) {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
  };

  return (
    <AnswersContext.Provider value={{ answers, updateAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
}
