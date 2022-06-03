import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Login() {
  const formStyles = {
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const textAreaStyles = {
    marginBottom: "12px",
    width: "300px",
  };

  const buttonStyles = {
    width: "300px",
  };

  return (
    <>
      <form style={formStyles} method="GET" action="/dashboard">
        <Typography variant="h4" gutterBottom component="div">
          Login
        </Typography>
        <TextField
          autoFocus
          id="username"
          label="Username"
          variant="outlined"
          style={textAreaStyles}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          style={textAreaStyles}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          style={buttonStyles}
        >
          Login
        </Button>
      </form>
    </>
  );
}
