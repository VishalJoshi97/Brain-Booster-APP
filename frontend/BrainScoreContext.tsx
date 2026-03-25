import React, { createContext, useContext, useState } from "react";

interface BrainScoreContextType {
  score: number;
  increaseScore: (value: number) => void;
  resetScore: () => void;
}

const BrainScoreContext = createContext<BrainScoreContextType | undefined>(undefined);

export const BrainScoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);

  const increaseScore = (value: number) => {
    setScore(prev => prev + value);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <BrainScoreContext.Provider value={{ score, increaseScore, resetScore }}>
      {children}
    </BrainScoreContext.Provider>
  );
};

export const useBrainScoreContext = () => {
  const context = useContext(BrainScoreContext);
  if (!context) {
    throw new Error("useBrainScoreContext must be used inside BrainScoreProvider");
  }
  return context;
};
