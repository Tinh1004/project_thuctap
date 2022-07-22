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

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };
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
            <FacebookLoginButton style={{ margin: 10 }} />
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
            <GoogleLoginButton />
          </LoginSocialGoogle>
          <Divider orientation="horizontal" sx={{ mt: 2 }}>
            OR
          </Divider>
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
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
