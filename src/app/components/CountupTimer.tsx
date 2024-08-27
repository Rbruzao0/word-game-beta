"use client";

import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";

interface CountupTimerProps {
  started: boolean;
}

const CountupTimer: React.FC<CountupTimerProps> = ({ started }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (started) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      setTimer(0);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [started]);

  return (
    <Typography>
      {new Date(timer * 1000).toISOString().substr(11, 8)}
    </Typography>
  );
};

export default CountupTimer;
