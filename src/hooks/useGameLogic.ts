"use client";

import { useState, useCallback, useEffect } from "react";

import wordsLists from "ss/app/dictionaries/dictsInfo";
import jklmWordsDict from "ss/app/dictionaries/misc/games/jklmWordsDict";

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
  correctSequence: number;
  favWords: string[];
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
  setTextInputValue: React.Dispatch<React.SetStateAction<string>>;
  setChosenDictId: React.Dispatch<React.SetStateAction<number | RegExpMatchArray | null | undefined>>;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const useGameLogic = (): GameLogic => {
  const [started, setStarted] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<string>("/start");
  const [textInputValue, setTextInputValue] = useState<string>("");
  const [dictionary, setDictionary] = useState<string[]>(jklmWordsDict);
  const [chosenDictId, setChosenDictId] = useState<number | RegExpMatchArray | null | undefined>();
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [favWords, setFavWords] = useState<string[]>([]);
  const [correctSequence, setCorrectSequence] = useState<number>(0);

  const [correctAnswerAudio, setCorrectAnswerAudio] = useState<HTMLAudioElement | null>(null);
  const [wrongAnswerAudio, setWrongAnswerAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCorrectAnswerAudio(new Audio("/sounds/correctSound.wav"));
      setWrongAnswerAudio(new Audio("/sounds/wrongSound.wav"));
    }
  }, []);

  const playCorrectSound = () => {
    correctAnswerAudio?.play();
  };

  const playWrongSound = () => {
    wrongAnswerAudio?.play();
  };

  const resetGame = useCallback(() => {
    setStarted(false);
    setTextInputValue("");
    setCorrectSequence(0);
    setStats((prevStats) => ({
      ...INITIAL_STATS,
      points: prevStats.points,
    }));
      
    setSelectedWord("/start");  
  }, []);

  const changeDict = () => {  
    if (chosenDictId !== undefined) {
      const selectedDict = wordsLists
        .flatMap((category) => category.dicts)
        .find((dict) => dict.id === chosenDictId);
      
      if (selectedDict) {
        setDictionary(selectedDict.dict);
        resetGame(); 
      }
    }
  }
  

  useEffect(() => {
    changeDict();
  }, [chosenDictId]);

  const getRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setSelectedWord(dictionary[randomIndex]);
  }, [dictionary]);

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
          const { length } = selectedWord;
          
          playCorrectSound();
          setCorrectSequence((prev) => prev + 1)
          
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
          playWrongSound();
          setCorrectSequence(0)
          setStats((prev) => ({
            ...prev,
            error: prev.error + 1,
            sequenceError: prev.sequenceError + 1,
          }));
          if (stats.sequenceError >= 2) {
            setStats((prev) => ({
              ...prev, 
              sequenceError: 0
            }))
            getRandomWord();
          }
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
    correctSequence,
    favWords,
    setStats,
    setTextInputValue,
    setChosenDictId,
    handleKeyDown,
  };
};

export default useGameLogic;
