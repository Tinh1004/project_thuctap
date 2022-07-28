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
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Form from "../utilities/Form";
import Login from "../form_login/Login";
import { Alert } from "@mui/material";

const theme = createTheme();
export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

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
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = (e) => {
    e.preventDefault();

      if (!fullname || !email ||  !username || !password ) {
        setFlag(true);

    } else {
        setFlag(false);
        localStorage.setItem("handleSubmitFullname", JSON.stringify(fullname));
        localStorage.setItem("handleSubmitEmail", JSON.stringify(email));
        localStorage.setItem("handleSubmitUsername", JSON.stringify(username));
        localStorage.setItem("handleSubmitPassword", JSON.stringify(password));
        console.log("Saved in Local Storage");
    }

    const validate = validateRegister();

    if (validate) {
      console.log("Successfully Register User" + username);
      setValidate({});
      setFullname("");
      setEmail("");
      setUsername("");
      setPassword("");
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
                validate.validate && validate.validate.email
                  ? "is-invalid "
                  : ""
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
            {/* <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl> */}

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
