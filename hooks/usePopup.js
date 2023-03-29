export default function usePopup() {
  const renderPopup = (selectedAnswer, currentQuestionData) => {
    if (selectedAnswer == null) {
      return null;
    }

    let isCorrect;
    if (
      selectedAnswer === currentQuestionData.correctAnswer ||
      selectedAnswer === currentQuestionData.correctAnswerTwo
    ) {
      isCorrect = true;
    } else {
      isCorrect = false;
    }

    return (
      <Popup
        color={isCorrect ? "green" : "red"}
        paragraph={isCorrect ? "Great job!" : "Keep trying!"}
      />
    );
  };

  return { renderPopup };
}
