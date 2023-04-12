import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AnswersContext = createContext();

export function useAnswers() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }) {
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const updateAnswers = (answer) => {
    if (answer !== null) {
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
    }
  };

  useEffect(() => {
    if (router.pathname != "/quiz" || router.pathname != "/results") {
      setAnswers([]);
    } else {
    }
  }, [router.pathname]);

  return (
    <AnswersContext.Provider value={{ answers, updateAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
}
