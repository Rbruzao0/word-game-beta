import React, { useEffect, useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";

import {
  hyphenWordsAchievements,
  longWordsAchievements,
  wordsAchievements,
} from "../dictionaries/achievementsDict";

interface Achievement {
  name: string;
  id: number;
  words?: number;
  longWords?: number;
  hyphenWords?: number;
}

interface AchievementsProps {
  words: number;
  longWords: number;
  hyphenWords: number;
}

const Achievements: React.FC<AchievementsProps> = ({
  words,
  longWords,
  hyphenWords,
}) => {
  const [notificated, setNotificated] = useState<boolean>(false);
  const [currentAchievement, setCurrentAchievement] =
    useState<Achievement | null>(null);

  useEffect(() => {
    const checkAchievements = () => {
      const achievement =
        wordsAchievements.find((ach) => ach.words === words) ||
        longWordsAchievements.find((ach) => ach.longWords === longWords) ||
        hyphenWordsAchievements.find((ach) => ach.hyphenWords === hyphenWords);

      if (achievement && !notificated && !currentAchievement) {
        setNotificated(true);
        return setCurrentAchievement(achievement);
      } else if (!achievement) {
        setNotificated(false);
      }
    };

    checkAchievements();

    if (currentAchievement) {
      const timer = setTimeout(() => {
        setCurrentAchievement(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [words, longWords, hyphenWords, currentAchievement]);

  return (
    <>
      {currentAchievement && (
        <Alert
          sx={{ position: "fixed", bottom: 10 }}
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
