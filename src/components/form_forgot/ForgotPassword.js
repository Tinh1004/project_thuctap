import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default function ForgotPassword() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h4" align="center">
          Forgot Password
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2" align="center">
                {"Back to Login"}
              </Link>
            </Grid>
          </Grid>
        </Box> 
      </Container>
    </ThemeProvider>
  );
}
