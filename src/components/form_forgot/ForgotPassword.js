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

import Form from "../utilities/Form";

const theme = createTheme();
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
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

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      console.log("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h4" align="center">
          Forgot Password
        </Typography>
        <Box
          component="form"
          method="POST"
          onSubmit={forgotPassword}
          autoComplete={"off"}
          noValidate
          sx={{ mt: 1 }}
        >
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
          <Grid container justifyContent="center" display="flex">
            <Grid item>
              <Link href="/login" variant="body2" underline="none">
                {"Back to Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
