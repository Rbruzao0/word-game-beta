import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface CountupTimerProps {
  started: boolean;
}

const CountupTimer: React.FC<CountupTimerProps> = ({ started }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!started) {
      setTimer(0);
      return;
    }

    const intervalId = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000);

    return () => clearInterval(intervalId);
  }, [started]);

  return (
    <Typography>
      {new Date(timer * 1000).toISOString().substr(11, 8)}
    </Typography>
  );
};

export default CountupTimer;
