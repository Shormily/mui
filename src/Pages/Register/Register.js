import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container, Grid, Typography, Button, TextField, CircularProgress, Alert } from "@mui/material";
import login from "../images/login.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useFirebase from "../Hooks/useFirebase";

export default function Register() {
  const {isLoading,user,registerNewUser}= useAuth();
  const [loginData, setLoginData] = useState({});
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didnt mach");
      // loginUser(loginData)
      return;
    }

    e.preventDefault();
  };
  //   const { signInUsingGoogle } = useFirebase();
  // inputs designs
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Container>
        <Grid container spacting={2}>
          {!isLoading && <Grid sx={{ mt: 2 }} item xs={12} md={6}>
            <Typography
              sx={{ mt: 35, mb: 2, color: "darkgreen" }}
              variant="h3"
              gutterBottom
            >
              Register
            </Typography>
            <FormControl  onSubmit={handleLoginSubmit}>
            <FormControl
              onChange={handleOnChange}
              
              variant="standard"
              sx={{ m: 1, mt: 3, width: "50ch" }}
            >
              <TextField
                id="standard-basic"
                name="Name"
                label="Name"
                variant="standard"
              />
            </FormControl>
            <FormControl
              onChange={handleOnChange}
              
              variant="standard"
              sx={{ m: 1, mt: 3, width: "50ch" }}
            >
              <TextField
                id="standard-basic"
                name="Email"
                label="Email"
                variant="standard"
              />
            </FormControl>

            

            {/* <FormControl
              onChange={handleOnChange}
             
              sx={{ m: 1, width: "50ch", mt: 2 }}
              variant="standard"
              name="password"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>

              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownPassword}
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              
            </FormControl> */}
            <br/>
            <FormControl
              onChange={handleOnChange}
             
              sx={{ m: 1, width: "50ch", mt: 2 }}
              variant="standard"
              name="password"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>

              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownPassword}
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <NavLink
                to="/logins"
                style={{
                  textDecoration: "none",
                  color: "darkblue",
                  marginTop: 5,
                }}
              >
                Already user? Please login
              </NavLink>
              <Button
                style={{ backgroundColor: "darkblue", marginTop: 20 }}
                variant="contained"
                sx={{ width: "50%" }}
                onClick={registerNewUser}
              >
                Register
              </Button>
              <Button
                style={{ backgroundColor: "darkblue", marginTop: 20 }}
                variant="contained"
                sx={{ width: "50%" }}
              >
                Google Log In
              </Button>
            </FormControl>
          
            </FormControl>
            {isLoading && <CircularProgress/>}
          {user?.email &&  <Alert style={{width: "50%"}} severity="error">User create successfully!!</Alert>}
          </Grid>}
         
          <Grid sx={{ mt: 20 }} item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
