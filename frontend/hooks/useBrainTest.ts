import { useState } from "react";

export default function useBrainTest() {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextQuestion = () => {
    setQuestionIndex(prev => prev + 1);
  };

  const increaseScore = () => {
    setScore(prev => prev + 10);
  };

  return {
    score,
    questionIndex,
    nextQuestion,
    increaseScore
  };
}
