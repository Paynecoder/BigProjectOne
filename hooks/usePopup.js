import Popup from "@/components/Popup";

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
      console.log("render");
    } else {
      isCorrect = false;
      console.log("render");
    }

    // Render the Popup component
    const popup = (
      <Popup
        color={isCorrect ? "green" : "red"}
        paragraph={isCorrect ? "Great job!" : "Keep trying!"}
      />
    );

    return popup;
  };
  return { renderPopup };
}
