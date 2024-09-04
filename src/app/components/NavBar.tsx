"use client";

import React, { useEffect, useState, useCallback } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  Tooltip,
  Container,
  List,
  ListSubheader,
  ListItemButton,
} from "@mui/material";

import wordsLists from "../dictionaries/dictsInfo";
import tipsDictionary from "../dictionaries/misc/tipsDict";
import LoginButton from "./LoginButton";
import useGameLogic from "ss/hooks/useGameLogic";

interface NavBarProps {
  setChosenDictId: (value: React.SetStateAction<number | undefined | null | RegExpMatchArray>) => void;
  points: number;
  setPoints: (value: React.SetStateAction<number>) => void;
}

const NavBar: React.FC<NavBarProps> = ({ points, setChosenDictId, setPoints }) => {
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

  const handleDictionarySelection = useCallback(
    (dict: { bought: boolean; id: number; name: string; price: number }) => {
      if (dict.bought) {
        setChosenDictId(dict.id);
        alert(`The dictionary has been changed to ${dict.name}`);
      } else if (points < dict.price) {
        alert(
          `You need ${dict.price - points} more points to buy ${dict.name}`
        );
      } else {
        setPoints((prevPoints) => prevPoints - dict.price);
        dict.bought = true;
        setChosenDictId(dict.id);
        alert(`Successfully purchased ${dict.name}`);
      }
      handleCloseNavMenu();
    },
    [points, setChosenDictId, setPoints]
  );

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
            {wordsLists.map((list) => (
              <List
                key={list.category}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {list.category}
                  </ListSubheader>
                }
              >
                {list.dicts.map((dict) => (
                  <Tooltip
                    key={dict.id}
                    title={`${dict.name} (${dict.dict.length} words)`}
                  >
                    <ListItemButton
                      onClick={() => handleDictionarySelection(dict)}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "8px 16px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography
                        sx={{
                          flexGrow: 1,
                          marginRight: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {dict.id} - {dict.name}
                      </Typography>
                      {!dict.bought && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "auto",
                          }}
                        >
                          {dict.price > 0 && (
                            <Typography sx={{ marginRight: 1 }}>
                              {dict.price}
                            </Typography>
                          )}
                          <LockOutlinedIcon />
                        </Box>
                      )}
                    </ListItemButton>
                  </Tooltip>
                ))}
              </List>
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
