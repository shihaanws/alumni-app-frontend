import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PasswordChecklist from "react-password-checklist";
import { Redirect } from "react-router";

const axios = require("axios");


const theme = createTheme();

export default function SignInSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [criteria, setCriteria] = useState(false);

  const [passwordAgain, setPasswordAgain] = useState("");

  const [email, setEmail] = React.useState("");
  const [signup, setSignup] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  const [role, setRole] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    axios
      .post("http://localhost:1234" + "/signup", {
        username: username.username,
        email: email.email,
        password: password1.password1,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.signup == false) {
          setSignup(false);
        } else {
          setSignup(true);
        }
      });
  };
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage:
            // "url(https://keystoneacademic-res.cloudinary.com/image/upload/f_auto,q_auto,c_fill,w_1920/element/21/21310_Alumni_F.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundSize: "100% 70%",
            backgroundPosition: "top",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 5,
              mx: 7,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(e) => {
                  setUsername({ username: e.target.value });
                }}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onChange={(e) => {
                  setEmail({ email: e.target.value });
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-helper-label">
                  Role
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value="Stuent">Student</MenuItem>
                  <MenuItem value="Alumni">Alumni</MenuItem>
                  <MenuItem value="Faculty">Faculty</MenuItem>
                </Select>
              </FormControl>
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
                onChange={(e) => setPasswordAgain(e.target.value)}
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
                Sign Up
              </Button>

              {signup == false ? (
                <center style={{ color: "red" }}>Signup failed</center>
              ) : null}
              {signup == true && criteria == true ? (
                <center style={{ margin: "15px" }}>
                  <Link style={{ color: "green" }} href="/login">
                    Signup Success. You can login now !
                  </Link>{" "}
                </center>
              ) : null}

              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
