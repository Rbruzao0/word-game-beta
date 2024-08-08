"use client";

import React, {useEffect, useState} from "react";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import dictionaries from "../dictionaries/dictsInfo";
import tipsDictionary from "../dictionaries/misc/tipsDict";

interface NavBarProps {
  points: number;
  setPoints: (value: React.SetStateAction<number>) => void;
  setChosenDict: (value: React.SetStateAction<number | undefined>) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  points,
  setPoints,
  setChosenDict,
}) => {
  const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));
  const [alertText, setAlertText] = useState("Type /start to start playing")
  const [tipId, setTipId] = useState(0)

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const getRandomTip = async () => {
    const randomIndex = Math.floor(Math.random() * tipsDictionary.length);
    setAlertText(tipsDictionary[randomIndex]);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomTip();
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
    setAnchorElUser(null);
    setChosenDict(dict.id);
    alert(`The dictionary has been changed to ${dict.name}`);
  };

  const handleBuyDictionary = (dict: {
    id: number;
    bought: boolean;
    price: number;
    name: string;
  }) => {
    setAnchorElUser(null);
    if (dict.bought) return alert(`The dict ${dict.name} is already yours`);
    if (points < dict.price)
      return alert(
        `You need more ${dict.price - points} points to buy this dict`
      );
    setPoints(points - dict.price);
    dict.bought = true;
    setChosenDict(dict.id);
    alert(`Successful purchased ${dict.name}`);
  };

  const isDictBought = (dict: {
    bought: boolean;
    id: number;
    name: string;
    price: number;
  }) => {
    return dict.bought ? handleChangeDict(dict) : handleBuyDictionary(dict);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Open dicts">
            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography textAlign="center">CHANGE DICTIONARY</Typography>
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseNavMenu}
          >
            {dictionaries.map((dict) => (
              <Tooltip title={`Contains ${dict.dict.length} words`}>
              <MenuItem key={dict.id} onClick={() => isDictBought(dict)}>
                <Box flexGrow={1}>
                  <Typography>{dict.name}</Typography>
                </Box>
                {!dict.bought && dict.price > 0 && (
                  <Typography paddingLeft={2}>{dict.price}</Typography>
                )}
                {!dict.bought && (
                  <Box paddingLeft={1}>
                    <LockOutlinedIcon />
                  </Box>
                )}
              </MenuItem>
              </Tooltip>
            ))}
          </Menu>
          <Box sx={{ flexGrow: 1 }} />
          <Typography maxWidth={1000} align="center" variant="h5">{alertText}</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography padding={2} variant="h6">
            POINTS: {points}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
