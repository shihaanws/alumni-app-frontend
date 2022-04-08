import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PasswordChecklist from "react-password-checklist";

import axios from "axios";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Shihaan</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [password2, setPassword2] = useState("");

  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [criteria, setCriteria] = useState(true);

  const [passwordAgain, setPasswordAgain] = useState("");
  const [reset, setReset] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  let { id, token } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const id1 = id;
    const token1 = token;
    // console.log(id1, token1);

    axios
      .post("http://localhost:1234" + `/reset-password/${id1}/${token1}`, {
        password1: password1.password1,
        password2: password2.password2,
      })
      .then((res) => {
        if (res.data.reset == true) {
          setReset(true);
        } else {
          setReset(false);
        }
        console.log(res);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Set Password "
                type="password"
                onChange={(e) => {
                  setPassword1({ password1: e.target.value });
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <RemoveRedEyeIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* {criteria==false?<p>False</p>:null} */}
              <TextField
                name="password "
                label="Confirm Password "
                margin="normal"
                required
                fullWidth
                type="password"
                onChange={(e) => {
                  setPasswordAgain(e.target.value);
                  setPassword2({ password2: e.target.value });
                }}
                type={showPassword1 ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword1}
                      >
                        {showPassword1 ? (
                          <RemoveRedEyeIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />



              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={5}
                value={password}
                valueAgain={passwordAgain}
                onChange={(isValid) => {
                  setCriteria(isValid);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset password
              </Button>

              <Grid container>
                {reset == true && criteria==true ? (
                  <Link
                    style={{ color: "green" }}
                    href="/login"
                    variant="body2"
                  >
                    Your password is reset. You can login now
                  </Link>
                ) :null}
                
                

                {reset == false ? (
                  <Grid style={{ color: "red" }} item xs>
                    Passwords dont match !
                  </Grid>
                ) : null}

                <Grid item></Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://us.123rf.com/450wm/rawpixel/rawpixel1612/rawpixel161225699/67003949-change-your-password-privacy-policy-protection-security-system-concept.jpg?ver=6)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
