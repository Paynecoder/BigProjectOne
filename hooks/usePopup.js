import Popup from "@/components/Popup";

export default function usePopup() {
  const renderPopup = (
    selectedAnswer,
    currentQuestionData,
    goodFeedback,
    badFeedback
  ) => {
    if (selectedAnswer == null) {
      return null;
    }

    let isCorrect;
    if (
      selectedAnswer === currentQuestionData.correctAnswer ||
      selectedAnswer === currentQuestionData.correctAnswerTwo
    ) {
      isCorrect = true;
      console.log("render");
    } else {
      isCorrect = false;
      console.log("render");
    }

    // Render the Popup component
    const popup = (
      <Popup
        color={isCorrect ? "#24CF16" : "#B91A1A"}
        paragraph={isCorrect ? goodFeedback : badFeedback}
      />
    );

    return popup;
  };

  const nextQuestion = (
    setCurrentQuestion,
    setSelectedAnswer,
    currentQuestion
  ) => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
  };

  return { renderPopup, nextQuestion };
}
