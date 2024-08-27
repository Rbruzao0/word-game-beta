"use client";

import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Container,
} from "@mui/material";

import dictionaries from "../dictionaries/dictsInfo";
import tipsDictionary from "../dictionaries/misc/tipsDict";
import LoginButton from "./LoginButton";

interface NavBarProps {
  setChosenDict: (value: React.SetStateAction<number | undefined>) => void;
  points: number;
  setPoints: (value: React.SetStateAction<number>) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  setChosenDict,
  points,
  setPoints,
}) => {
  const [tipText, setTipText] = useState("Type /start to start playing");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tipsDictionary.length);
      setTipText(tipsDictionary[randomIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeDict = (dict: { id: number; name: string }) => {
    setChosenDict(dict.id);
    setAnchorElUser(null);
    alert(`The dictionary has been changed to ${dict.name}`);
  };

  const handleBuyDictionary = (dict: {
    id: number;
    bought: boolean;
    price: number;
    name: string;
  }) => {
    setAnchorElUser(null);
    if (dict.bought) return alert(`${dict.name} is already yours`);
    if (points < dict.price)
      return alert(
        `You need ${dict.price - points} more points to buy ${dict.name}`
      );

    setPoints((prevPoints) => prevPoints - dict.price);
    dict.bought = true;
    setChosenDict(dict.id);
    alert(`Successfully purchased ${dict.name}`);
  };

  const handleDictionarySelection = (dict: {
    bought: boolean;
    id: number;
    name: string;
    price: number;
  }) => {
    dict.bought ? handleChangeDict(dict) : handleBuyDictionary(dict);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Open dictionaries">
            <Button onClick={handleOpenUserMenu} sx={{ color: "white" }}>
              <Typography>CHANGE DICTIONARY</Typography>
            </Button>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {dictionaries.map((dict) => (
              <Tooltip
                key={dict.id}
                title={`Contains ${dict.dict.length} words`}
              >
                <MenuItem onClick={() => handleDictionarySelection(dict)}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Typography>{dict.name}</Typography>
                  </Box>
                  {!dict.bought && (
                    <>
                      {dict.price > 0 && <Typography>{dict.price}</Typography>}
                      <LockOutlinedIcon sx={{ ml: 1 }} />
                    </>
                  )}
                </MenuItem>
              </Tooltip>
            ))}
          </Menu>
          <Box flexGrow={1} />
          <Typography align="center" variant="h5">
            {tipText}
          </Typography>
          <Box flexGrow={1} />
          <Typography variant="h6" sx={{ p: 2 }}>
            POINTS: {points}
          </Typography>
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
