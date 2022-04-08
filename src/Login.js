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
import { useState } from "react";
import { Redirect } from "react-router";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const axios = require("axios");

const theme = createTheme();

export default function SignInSide() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [role, setRole] = React.useState("");
  const [studentRedirect, setStudentRedirect] = useState(false);
  const [alumniRedirect, setAlumniRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role == "Student") {
      setStudentRedirect(true);
    } else if (role == "Alumni") {
      setAlumniRedirect(true);
    }
    console.log(role);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const redirect = (e) => {
    // e.preventDefault();
    // setRole(e.target.value);
    // console.log(role)
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
            backgroundImage:
              "url(https://keystoneacademic-res.cloudinary.com/image/upload/f_auto,q_auto,c_fill,w_1920/element/21/21310_Alumni_F.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
        />
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
              Log in
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
                error={failed == true ? "error" : ""}
                helperText={failed == true ? "Login failed" : ""}
                onChange={(e) => {
                  setPassword({ password: e.target.value });
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
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
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Alumni">Alumni</MenuItem>
                  <MenuItem value="Faculty">Faculty</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => redirect}
              >
                Sign In
              </Button>
              {studentRedirect == true ? (
                <Redirect to="/student-dashboard" />
              ) : null}
              {alumniRedirect == true ? (
                <Redirect to="/alumni-dashboard" />
              ) : null}

              {/* {failed == true ? (
                <center style={{ color: "red" }}>Login failed</center>
              ) : null} */}
              <Grid container>
                <Grid item xs>
                  <Link href="/forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
