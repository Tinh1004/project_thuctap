import * as React from "react";
import { useRef, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";

import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Form from "../utilities/Form";

const theme = createTheme();

export default function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState("");
  const googleRef = useRef();
  const facebookRef = useRef();

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    console.log("logout fail");
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      username: {
        value: username,
        isRequired: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };
  const login = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      console.log("Successfully Login " + username);
      setValidate({});
      setUsername("");
      setPassword("");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h4" align="center">
          Login
        </Typography>
        <div className={`App ${provider && profile ? "hide" : ""}`}>
          <LoginSocialFacebook
          
            ref={facebookRef}
            appId={"556246546227879"}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              console.log(data, "data");
              console.log(provider, "provider");
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <FacebookLoginButton justifyContent="center" display="flex" style={{ margin: 10 }} />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            ref={googleRef}
            client_id="1009598528563-a0roh8h4vpdi366hdh9uoqv4qucmct41.apps.googleusercontent.com"
            onLogoutFailure={onLogoutFailure}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              console.log(data, "data");
              console.log(provider, "provider");
            }}
            onReject={(err) => {
              console.log("hbhbdhd", err);
            }}
          >
            <GoogleLoginButton justifyContent="center" display="flex"/>
          </LoginSocialGoogle>
          <Divider orientation="horizontal" sx={{ mt: 2 }}>
            OR
          </Divider>
        </div>
        <Box
          component="form"
          onSubmit={login}
          autoComplete={"off"}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            className={`form-control ${
              validate.validate && validate.validate.username ? "is-invalid " : ""
            }`}
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div
            className={`invalid-feedback text-start ${
              validate.validate && validate.validate.username
                ? "d-block"
                : "d-none"
            }`}
          >
            {validate.validate && validate.validate.username
              ? validate.validate.username[0]
              : ""}
          </div>
          <TextField
            margin="normal"
            className={`form-control ${
              validate.validate && validate.validate.password ? "is-invalid " : ""
            }`}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <div
            className={`invalid-feedback text-start ${
              validate.validate && validate.validate.password
                ? "d-block"
                : "d-none"
            }`}
          >
            {validate.validate && validate.validate.password
              ? validate.validate.password[0]
              : ""}
          </div>
          <Grid container>
            <Grid item xs>
              <Link
                href="/forgot"
                variant="body2"
                underline="none"
                sx={{ float: "right" }}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="center" display="flex">
            <Grid item>
              Don't have an account?
              <Link href="/signup" variant="body2">
                {" Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
