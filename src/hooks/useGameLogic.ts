"use client";

import { useState, useCallback, useEffect } from "react";

import wordsLists from "ss/app/dictionaries/dictsInfo";
import jklmWordsDict from "ss/app/dictionaries/misc/jklmWordsDict";

const INITIAL_STATS = {
  word: 0,
  longWord: 0,
  hyphenWord: 0,
  character: 0,
  error: 0,
  sequenceError: 0,
  skippedWords: 0,
  score: 0,
  points: 10000,
};

type Stats = {
  word: number;
  longWord: number;
  hyphenWord: number;
  character: number;
  error: number;
  sequenceError: number;
  skippedWords: number;
  score: number;
  points: number;
};

type GameLogic = {
  started: boolean;
  selectedWord: string;
  textInputValue: string;
  stats: Stats;
  favWords: string[];
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
  setTextInputValue: React.Dispatch<React.SetStateAction<string>>;
  setChosenDict: React.Dispatch<React.SetStateAction<number | RegExpMatchArray | null | undefined>>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const useGameLogic = (): GameLogic => {
  const [started, setStarted] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("/start");
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [dictionary, setDictionary] = useState<string[]>(jklmWordsDict);
  const [chosenDict, setChosenDict] = useState<number | RegExpMatchArray | null | undefined>();
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [favWords, setFavWords] = useState<string[]>([]);

  const correctAnswerAudio = new Audio("/sounds/correctSound.wav");
  const wrongAnswerAudio = new Audio("/sounds/wrongSound.wav");

  const resetGame = useCallback(() => {
    setSelectedWord("/start");
    setStarted(false);
    setTextInputValue("");
    setStats((prevStats) => ({
      ...INITIAL_STATS,
      points: prevStats.points,
    }));
  }, []);

  const changeDict = useCallback(() => {
    if (chosenDict !== undefined) {
      const selectedDict = wordsLists
        .flatMap((category) => category.dicts)
        .find((dict) => dict.id === chosenDict);

      if (selectedDict) {
        resetGame();
        setDictionary(selectedDict.dict);
      }
    }
  }, [chosenDict, resetGame]);

  useEffect(() => {
    changeDict();
  }, [changeDict]);

  const getRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setSelectedWord(dictionary[randomIndex]);
  }, [dictionary]);

  const calculateScore = useCallback(() => {
    const { word, longWord, hyphenWord, character, error } = stats;
    const scoreMath = Math.round(
      word * 5 + longWord * 15 + hyphenWord * 30 + character * 0.5 - error * 10
    );

    setStats((prev) => ({
      ...prev,
      score: scoreMath,
      points: prev.points - prev.score + scoreMath,
    }));
  }, [stats]);

  const favoriteWord = useCallback(() => {
    setFavWords((prev) =>
      prev.includes(selectedWord) ? prev : [...prev, selectedWord]
    );
  }, [selectedWord]);

  const handleCommands = useCallback(() => {
    const commands = {
      "/start": () => {
        if (started === true) {
          return setTextInputValue("");
        } else {
          setStarted(true);
          setTextInputValue("");
          getRandomWord();
        }
      },
      "/reset": resetGame,
      "/restart": resetGame,
      "/skip": () => {
        setStats((prev) => ({ ...prev, skippedWords: prev.skippedWords + 1 }));
        getRandomWord();
        setTextInputValue("");
      },
      "/next": () => {
        setStats((prev) => ({ ...prev, skippedWords: prev.skippedWords + 1 }));
        getRandomWord();
        setTextInputValue("");
      },
      "/end": resetGame,
      "/star": favoriteWord,
      "/fav": favoriteWord,
    };
  
    const matchedCommand = Object.keys(commands).find((command): command is keyof typeof commands =>
      textInputValue.startsWith(command)
    );
  
    if (matchedCommand) {
      commands[matchedCommand]();
      return true;
    }
    return false;
  }, [textInputValue, resetGame, getRandomWord, favoriteWord, started]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && textInputValue) {
        if (handleCommands()) return;
        
        if (textInputValue.startsWith("/")) {
          setTextInputValue("");
          return;
        }
        
        if (textInputValue.toLowerCase() === selectedWord.toLowerCase()) {
          correctAnswerAudio.play();
          const { length } = selectedWord;
          setStats((prev) => {
            const updatedStats = {
              ...prev,
              word: prev.word + 1,
              character: prev.character + length,
              longWord: length >= 20 ? prev.longWord + 1 : prev.longWord,
              hyphenWord: selectedWord.includes("-")
                ? prev.hyphenWord + 1
                : prev.hyphenWord,
              sequenceError: 0,
            };
            const scoreMath = Math.round(
              updatedStats.word * 5 +
              updatedStats.longWord * 15 +
              updatedStats.hyphenWord * 30 +
              updatedStats.character * 0.5 -
              updatedStats.error * 10
            );
            return {
              ...updatedStats,
              score: scoreMath,
              points: prev.points - prev.score + scoreMath,
            };
          });
          getRandomWord();
        } else {
          wrongAnswerAudio.play();
          setStats((prev) => ({
            ...prev,
            error: prev.error + 1,
            sequenceError: prev.sequenceError + 1,
          }));
          if (stats.sequenceError >= 2) getRandomWord();
        }
  
        setTextInputValue("");
      }
    },
    [
      textInputValue,
      selectedWord,
      getRandomWord,
      correctAnswerAudio,
      wrongAnswerAudio,
      handleCommands,
      stats.sequenceError,
    ]
  );
  
  return {
    started,
    selectedWord,
    textInputValue,
    stats,
    favWords,
    setStats,
    setTextInputValue,
    setChosenDict,
    handleKeyDown,
  };
};

export default useGameLogic;
