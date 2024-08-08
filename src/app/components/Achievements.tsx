import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import { wordsAchievements } from "../dictionaries/achievementsDict";

interface Achievement {
  name: string;
  id: number;
  words: number;
}

interface AchievementsProps {
  words: number;
}

const Achievements: React.FC<AchievementsProps> = ({ words }) => {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const achievement = wordsAchievements.find(ach => ach.words === words);

    if (currentAchievement) {
      const timer = setTimeout(() => {
        setCurrentAchievement(null);
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (achievement) {
      setCurrentAchievement(achievement);
    }
  }, [words]);

  return (
    <>
      {currentAchievement && (
        <Alert
          sx={{position: "fixed", bottom: 10,}}
          icon={<CheckCircleOutline fontSize="inherit" />}
          severity="success"
        >
          {currentAchievement.name}
        </Alert>
      )}
    </>
  );
};

export default Achievements;
