"use client";

import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.name === JSON.parse(userToken).name
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (name, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.name === name);

    if (hasUser?.length) {
      if (hasUser[0].name === name && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ name, token }));
        return setUser({ name, password });
      } else {
        return "Incorrect user or password";
      }
    } else {
      return "User not found"
    }
  };

  const signup = (name, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.name === name);

    if (hasUser?.length) {
      return "This username is already taken";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { name, password }];
    } else {
      newUser = [{ name, password }];
    }

    localStorage.setItem("users_db", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
