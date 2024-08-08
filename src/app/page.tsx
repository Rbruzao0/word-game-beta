"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Box,
  Container,
  InputBase,
  NoSsr,
  Paper,
  Typography,
} from "@mui/material";

import NavBar from "./components/NavBar";
import jklmWordsDict from "./dictionaries/misc/jklmWordsDict";
import dictionaries from "./dictionaries/dictsInfo";
import CountupTimer from "./components/CountupTimer";
import { CheckCircleOutline } from "@mui/icons-material";
import Achievements from "./components/Achievements";

const SelectedWordText = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  fontSize: 30,
  height: 50,
  minWidth: 800,
  display: "flex",
  justifyContent: "center",
}));

const InfoText = styled("div")(({ theme, color }) => ({
  ...theme.typography.button,
  color,
  fontSize: 15,
  display: "flex",
  justifyContent: "center",
}));

const MainPage = () => {
  const [started, setStarted] = useState(false);
  const [selectedWord, setSelectedWord] = useState("/start");
  const [textInputValue, setTextInputValue] = useState("");
  const [dictionary, setDictionary] = useState(jklmWordsDict);
  const [chosenDict, setChosenDict] = useState<number | undefined>(undefined);
  const [word, setWord] = useState(0);
  const [longWord, setLongWord] = useState(0);
  const [hyphenWord, setHyphenWord] = useState(0);
  const [character, setCharacter] = useState(0);
  const [error, setError] = useState(0);
  const [sequenceError, setSequenceError] = useState(0);
  const [skippedWords, setSkippedWords] = useState(0);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(10000);

  const correctAnswerAudio = new Audio("/sounds/correctSound.wav");
  const wrongAnswerAudio = new Audio("/sounds/wrongSound.wav");

  const resetGame = () => {
    setSelectedWord("/start");
    setTextInputValue("");
    setWord(0);
    setLongWord(0);
    setHyphenWord(0);
    setCharacter(0);
    setError(0);
    setSequenceError(0);
    setSkippedWords(0);
  };

  const changeDict = () => {
    if (chosenDict === undefined) return;

    const selectedDict = dictionaries[chosenDict];
    if (selectedDict) {
      resetGame();
      setDictionary(selectedDict.dict);
    }
  };

  useEffect(() => {
    changeDict();
  }, [chosenDict]);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    setSelectedWord(dictionary[randomIndex]);
  };

  const getScore = () => {
    const scoreMath = Math.round(
      word * 5 + longWord * 15 + hyphenWord * 30 + character * 0.5 - error * 10
    );
    setScore(scoreMath);
    setPoints((prevStatePoints) => prevStatePoints + scoreMath);
  };

  const verifyTextInputCommands = () => {
    if (textInputValue === "/start") {
      resetGame();
      getRandomWord();
      setTextInputValue("");
      setStarted(true);
      return true;
    }
    if (textInputValue === "/reset") {
      resetGame();
      setTextInputValue("");
      return true;
    }
    if (textInputValue === "/skip") {
      setSkippedWords((prevState) => prevState + 1);
      getRandomWord();
      setTextInputValue("");
      return true;
    }
    if (textInputValue === "/end") {
      setStarted(false);
      getScore();
      resetGame();
      return true;
    }
    return false;
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key !== "Enter") return;
    if (textInputValue === "") return;
    if (verifyTextInputCommands()) return;
    if (textInputValue.startsWith("/")) return setTextInputValue("");

    if (textInputValue.toLowerCase() !== selectedWord.toLowerCase()) {
      setTextInputValue("");
      setError((prevState) => prevState + 1);
      setSequenceError((prevState) => prevState + 1);
      wrongAnswerAudio.play();

      if (sequenceError >= 2) {
        setSequenceError(0);
        getRandomWord();
      }
      return;
    }

    if (selectedWord.length >= 20) setLongWord((prevState) => prevState + 1);
    if (selectedWord.includes("-")) setHyphenWord((prevState) => prevState + 1);

    setSequenceError(0);
    setWord((prevState) => prevState + 1);
    setCharacter((prevState) => prevState + selectedWord.length);
    correctAnswerAudio.play();
    getRandomWord();
    setTextInputValue("");
  };

  return (
    <>
      <NavBar
        setChosenDict={setChosenDict}
        points={points}
        setPoints={setPoints}
      />
      <Container fixed>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="90vh"
        >
          <Box>
            <Box padding={2}>
              <InfoText color="red">Errors: {error}</InfoText>
              <InfoText color="yellow">Skipped words: {skippedWords}</InfoText>
              <InfoText>Words: {word}</InfoText>
              <InfoText>Characters: {character}</InfoText>
              <InfoText>Long words: {longWord}</InfoText>
              <InfoText>Hyphenated words: {hyphenWord}</InfoText>
              <InfoText>Past Score: {score}</InfoText>
            </Box>
            <SelectedWordText>{selectedWord}</SelectedWordText>
          </Box>
          <SelectedWordText>{textInputValue}</SelectedWordText>
          <NoSsr>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                size="medium"
                onKeyDown={handleKeyDown}
                value={textInputValue}
                style={{
                  borderRadius: 4,
                  position: "relative",
                  fontSize: 16,
                  width: "auto",
                  padding: "10px 12px",
                }}
                onChange={(e) => setTextInputValue(e.target.value)}
              />
            </Paper>
            <Typography>/end to... to end, actually</Typography>
          </NoSsr>
          <CountupTimer started={started} />
          <Achievements
            words={word}
            longWords={longWord}
            hyphenWords={hyphenWord}
          />
        </Box>
      </Container>
    </>
  );
};

export default MainPage;
