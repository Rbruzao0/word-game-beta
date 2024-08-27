"use client";

import React from "react";

import { styled } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";
import {
  Container,
  Box,
  Paper,
  InputBase,
  Typography,
  NoSsr,
} from "@mui/material";

import useGameLogic from "../hooks/useGameLogic";
import CountupTimer from "./components/CountupTimer";
import Achievements from "./components/Achievements";
import NavBar from "./components/NavBar";

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

const InfoText = styled("div")<TypographyProps>(({ theme, color }) => ({
  ...theme.typography.button,
  color,
  fontSize: 15,
  display: "flex",
  justifyContent: "center",
}));

const MainPage: React.FC = () => {
  const {
    started,
    selectedWord,
    textInputValue,
    stats,
    setStats,
    setTextInputValue,
    setChosenDict,
    handleKeyDown,
  } = useGameLogic();

  return (
    <>
      <NavBar
        setChosenDict={setChosenDict}
        points={stats.points}
        setPoints={(value: React.SetStateAction<number>) =>
          setStats((prevStats) => ({
            ...prevStats,
            points:
              typeof value === "function"
                ? (value as (prevPoints: number) => number)(prevStats.points)
                : value,
          }))
        }
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
              <InfoText color="red">Errors: {stats.error}</InfoText>
              <InfoText color="yellow">
                Skipped words: {stats.skippedWords}
              </InfoText>
              <InfoText>Words: {stats.word}</InfoText>
              <InfoText>Characters: {stats.character}</InfoText>
              <InfoText>Long words: {stats.longWord}</InfoText>
              <InfoText>Hyphenated words: {stats.hyphenWord}</InfoText>
              <InfoText>Past Score: {stats.score}</InfoText>
            </Box>
            <SelectedWordText>{selectedWord}</SelectedWordText>
          </Box>
          <SelectedWordText>{textInputValue}</SelectedWordText>
          <NoSsr>
            <Paper sx={{ display: "flex", alignItems: "center", width: 300 }}>
              <InputBase
                size="medium"
                onKeyDown={handleKeyDown}
                value={textInputValue}
                onChange={(e) => setTextInputValue(e.target.value)}
                style={{
                  borderRadius: 4,
                  padding: "10px 12px",
                  fontSize: 16,
                  width: "auto",
                }}
              />
            </Paper>
            <Typography>/end to... to end, actually</Typography>
          </NoSsr>
          <CountupTimer started={started} />
          <Achievements
            words={stats.word}
            longWords={stats.longWord}
            hyphenWords={stats.hyphenWord}
          />
        </Box>
      </Container>
    </>
  );
};

export default MainPage;
