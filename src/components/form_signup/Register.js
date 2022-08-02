import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Form from "../utilities/Form";
import Login from "../form_login/Login";
import { Alert, InputLabel, MenuItem, Select } from "@mui/material";
import { BASE_URL } from "../utilities/contants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userSlice from "../../redux/userSlice/userSlice";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const theme = createTheme();
export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [validate, setValidate] = useState({});

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      fullname: {
        value: fullname,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      username: {
        value: username,
        isRequired: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
      gender: {
        value: gender,
        isRequired: true,
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

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !username || !password || !gender) {
      setFlag(true);
    } else {
      setFlag(false);
    }

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setFullname("");
      setEmail("");
      setUsername("");
      setPassword("");
      setGender("");

      await axios({
        method: "POST",
        url: `${BASE_URL}/register`,
        data: {
          fullName: fullname,
          email,
          userName: username,
          password,
          gender,
        },
      })
        .then((res) => {
          console.log(res.data);
          dispatch(
            userSlice.actions.register({
              fullName: res.data.user.fullName,
              _id: res.data.user._id,
              image: "",
            })
          );
          navigate("/");
          toast.success("Register Success!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        })
        .catch((err) => {
          if (err) {
            console.log(err);
            toast.error("Register Failure!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container onSubmit={handleRegister} component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h4" align="center">
          Sign Up
        </Typography>
        <Box component="form" autoComplete={"off"} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            className={`form-control ${
              validate.validate && validate.validate.fullname
                ? "is-invalid "
                : ""
            }`}
            required
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <div
            className={`invalid-feedback text-start ${
              validate.validate && validate.validate.fullname
                ? "d-block"
                : "d-none"
            }`}
          >
            {validate.validate && validate.validate.fullname
              ? validate.validate.fullname[0]
              : ""}
          </div>

          <TextField
            margin="normal"
            className={`form-control ${
              validate.validate && validate.validate.email ? "is-invalid " : ""
            }`}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className={`invalid-feedback text-start ${
              validate.validate && validate.validate.email
                ? "d-block"
                : "d-none"
            }`}
          >
            {validate.validate && validate.validate.email
              ? validate.validate.email[0]
              : ""}
          </div>

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

          <FormControl
            fullWidth
            className={`form-control ${
              validate.validate && validate.validate.gender ? "is-invalid " : ""
            }`}
          >
            <InputLabel required id="demo-simple-select-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Age"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>
          </FormControl>
          <div
            className={`invalid-feedback text-start ${
              validate.validate && validate.validate.gender
                ? "d-block"
                : "d-none"
            }`}
          >
            {validate.validate && validate.validate.gender
              ? validate.validate.gender[0]
              : ""}
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center" display="flex">
            <Grid item>
              Already have an account ?
              <Link href="/login" variant="body2">
                {" Login"}
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
  );
}
