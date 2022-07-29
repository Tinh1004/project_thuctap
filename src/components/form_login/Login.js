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
import { Alert } from "@mui/material";
import { authSlice } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Form from "../utilities/Form";
import axios from "axios";
import { BASE_URL } from "../utilities/contants";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const theme = createTheme();

export default function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState("");
  const googleRef = useRef();
  const facebookRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginStart = useCallback(() => {
    console.log("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    console.log("logout fail");
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});

  const [flag, setFlag] = useState(false);

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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
    }

    const validate = validateforgotPassword();

    if (validate) {
      setValidate({});
      setUsername("");
      setPassword("");

      await axios({
        method: "POST",
        url: `${BASE_URL}/login`,
        data: {
          userName: username,
          password,
        },
      })
        .then((res) => {
          console.log(res.data);
          dispatch(authSlice.actions.login(res.data.user));
          toast.success("Login Success!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/");
        })
        .catch((err) => {
          if (err) {
            console.log(err);
            toast.error("Login Failure!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container onSubmit={handleLogin} component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h4" align="center">
            Login
          </Typography>
          <div className={`App ${provider && profile ? "hide" : ""}`}>
            <LoginSocialFacebook
              align="center"
              display="flex"
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
              <FacebookLoginButton
                align="center"
                display="flex"
                style={{ margin: 5 }}
              />
            </LoginSocialFacebook>

            <LoginSocialGoogle
              align="center"
              display="flex"
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
              <GoogleLoginButton align="center" display="flex" />
            </LoginSocialGoogle>
            <Divider orientation="horizontal" sx={{ mt: 2 }}>
              OR
            </Divider>
          </div>
          <Box component="form" autoComplete={"off"} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              className={`form-control ${
                validate.validate && validate.validate.username
                  ? "is-invalid "
                  : ""
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
                validate.validate && validate.validate.password
                  ? "is-invalid "
                  : ""
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
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
