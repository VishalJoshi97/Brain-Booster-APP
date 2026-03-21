import { useState } from "react";

export default function useBrainScore() {
  const [score, setScore] = useState(0);

  const increaseScore = (value: number) => {
    setScore(prev => prev + value);
  };

  const resetScore = () => {
    setScore(0);
  };

  const getLevel = () => {
    if (score < 20) return "Healthy Brain";
    if (score < 50) return "Mild Brain Rot";
    if (score < 80) return "Serious Brain Rot";
    return "Extreme Brain Rot";
  };

  return { score, increaseScore, resetScore, getLevel };
}
