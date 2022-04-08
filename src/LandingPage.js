import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import SchoolIcon from "@mui/icons-material/School";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  let history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SchoolIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Alumni System
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            display: "flex",
          }}
        >
          <Container maxWidth="sm" style={{ margin: "50px 0px 0px 120px" }}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
            >
              Alumni System
            </Typography>
            <Typography
              variant="h5"
              // align="center"
              color="text.secondary"
              paragraph
            >
              Your alumni based mentoring platform is here! Come connect with
              your alumni and get the most out of it.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => history.push("/login")}
              >
                Log in
              </Button>
              <Button variant="outlined" onClick={() => history.push("/signup")}>
                Sign Up
              </Button>
            </Stack>
          </Container>
          <Container>
            <img
              style={{ maxWidth: "70%", margin: "0px 0px 00px 100px" }}
              src="icon.svg"
            />
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
