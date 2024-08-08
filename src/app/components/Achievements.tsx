import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
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
  const [currentAchievement, setCurrentAchievement] =
    useState<Achievement | null>(null);

  useEffect(() => {
    const achievement = wordsAchievements.find((ach) => ach.words === words);

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

  useEffect(() => {
    const achievement = longWordsAchievements.find(
      (ach) => ach.longWords === longWords
    );

    if (currentAchievement) {
      const timer = setTimeout(() => {
        setCurrentAchievement(null);
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (achievement) {
      setCurrentAchievement(achievement);
    }
  }, [longWords]);

  useEffect(() => {
    const achievement = hyphenWordsAchievements.find(
      (ach) => ach.hyphenWords === hyphenWords
    );

    if (currentAchievement) {
      const timer = setTimeout(() => {
        setCurrentAchievement(null);
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (achievement) {
      setCurrentAchievement(achievement);
    }
  }, [hyphenWords]);

  return (
    <>
      {currentAchievement !== null && (
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
