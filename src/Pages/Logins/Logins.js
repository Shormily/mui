import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container, Grid, Typography, Button, TextField } from "@mui/material";
import login from "../images/login.png";
import React from "react";
import { NavLink } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import useFirebases from "../Hooks/useFirebases";

export default function Logins() {
  const { signInUsingGoogle } = useFirebases();
  
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
          <Grid sx={{ mt: 2 }} item xs={12} md={6}>
            <Typography
              sx={{ mt: 35,  color: "darkblue" }}
              variant="h3"
              gutterBottom
            >
              Login
            </Typography>
            <FormControl
            //  onSubmit={handleLoginSubmit}
            >
              <FormControl
                type="Email"
                // onChange={handleOnChange}
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
              <br />

              <FormControl
                // onChange={handleOnChange}
                sx={{ m: 1, width: "50ch", mt: 2 }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>

                <Input
                  name="password"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onMouseDown={handleMouseDownPassword}
                        onClick={handleClickShowPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "darkblue",
                    marginTop: 5,
                  }}
                >
                  New user? Please Register
                </NavLink>
                <Button
                  style={{ backgroundColor: "darkblue", marginTop: 20 }}
                  variant="contained"
                  sx={{ width: "50%" }}
                  onClick={signInUsingGoogle}
                >
                  Login
                </Button>
              </FormControl>
            </FormControl>
          </Grid>
          <Grid sx={{ mt: 20 }} item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
