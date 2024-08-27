import React, { useState } from "react";
import { Box, Modal, Button, TextField, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f1f1f1",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "16px",
};

type StyledFilledTextFieldProps = {
  label: string;
  type?: string;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const StyledFilledTextField: React.FC<StyledFilledTextFieldProps> = ({
  label,
  type = "text",
  value,
  setState,
}) => (
  <TextField
    sx={{ margin: 2 }}
    label={label}
    type={type}
    value={value}
    onChange={(e) => setState(e.target.value)}
    variant="filled"
  />
);

interface AuthContextType {
  signin: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
}

const LoginButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState<"login" | "signup">("login");
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const { signin, signup, signout } = useAuth() as AuthContextType;

  const toggleModal = () => setOpen((prev) => !prev);
  const toggleAction = () =>
    setAction((prevAction) => (prevAction === "login" ? "signup" : "login"));

  const handleAuth = async () => {
    if (!username || !password || (action === "signup" && !passwordConfirm)) {
      return setError("Fill all the fields");
    }

    if (action === "signup" && password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      if (action === "login") {
        const res = await signin(username, password);
        if (typeof res === "string") return setError(res);

        setError("");
        setLogged(true);
        toggleModal();
      } else {
        await signup(username, password);
        toggleAction();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : `${action} failed`);
    }
  };

  const handleLogout = async () => {
    await signout();
    setLogged(false);
  };

  return (
    <div>
      {!logged ? (
        <>
          <Button onClick={toggleModal} sx={{ my: 2, color: "white" }}>
            <Typography>LOGIN</Typography>
          </Button>
          <Modal open={open} onClose={toggleModal}>
            <Box sx={modalStyle}>
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <StyledFilledTextField
                  label="Username"
                  value={username}
                  setState={setUsername}
                />
                <StyledFilledTextField
                  label="Password"
                  value={password}
                  setState={setPassword}
                  type="password"
                />
                {action === "signup" && (
                  <StyledFilledTextField
                    label="Password Confirmation"
                    value={passwordConfirm}
                    setState={setPasswordConfirm}
                    type="password"
                  />
                )}
              </Box>
              {error && (
                <Typography color="error" marginBottom={2}>
                  {error}
                </Typography>
              )}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" onClick={toggleModal}>
                  CANCEL
                </Button>
                <Button variant="contained" onClick={handleAuth}>
                  {action}
                </Button>
              </Box>
              <Typography marginTop={2} color="black">
                {action === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Typography>
              <Button variant="contained" onClick={toggleAction}>
                {action === "login" ? "Create Account" : "Login"}
              </Button>
            </Box>
          </Modal>
        </>
      ) : (
        <Button variant="contained" onClick={handleLogout}>
          LOG OUT
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
