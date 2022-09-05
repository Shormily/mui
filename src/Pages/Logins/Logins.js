
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
 
} from "@mui/material";
import img19 from "../images/img19.png";
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import {  useHistory, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail} from 'firebase/auth';

export default function Logins() {
  const { signInUsingGoogle } = useAuth();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const history = useHistory();
  const location = useLocation();
  const [isLogin,setIsLogin] = useState(false)

  const hanldeGoogleLogin = () => {
    signInUsingGoogle(location, history);
  };
  const toggleLogin = e =>{
    setIsLogin(e.target.checked)
  }


  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });


  
  return (
    <div>
      <Container>
        <Grid container spacting={2}>
          <Grid sx={{ mt: 20 }} item xs={12} md={6}>
            <img style={{ width: "100%" }} src={img19} alt="" />
          </Grid>
          <Grid sx={{ mt: 20 }} item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 900,
                textAlign: "center",
              }}
              variant="h3"
              gutterBottom
            >
            Please {isLogin ? "Log In" :" Sign Up "}
            </Typography>
            <TextField
              id="outlined-textarea"
              label="Name"
             
              multiline
              style={{ width: "90%" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-textarea"
              label="Email"
             
              multiline
              style={{ width: "90%" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-textarea"
              label="Password"
             
              multiline
              style={{ width: "90%" }}
            />
            
           
         
           
            <Typography
            sx={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 900
            }}
            >
            <Checkbox onChange={toggleLogin} {...label}  defaultChecked color="warning"  />Already You have Account? Please Log In.!!
            </Typography>
            <div className="d-flex">
            <Button
           
              style={{
                backgroundColor: "#f96000",
                fontWeight: 900,
                fontFamily: "'Lato', sans-serif",
                width: "200px",
                paddingTop: "15px",
                paddingBottom: "10px",
                color: "white",
                marginLeft: 5,
                marginTop: 25,
              }}
              onClick={hanldeGoogleLogin}
            >
             {isLogin ? "Log In" : "Sign In"}
              <LockOpenIcon sx={{ marginLeft: "5px", fontSize: "27px" }} />
            </Button>
            <Button
              style={{
                backgroundColor: "black",
                fontWeight: 900,
                fontFamily: "'Lato', sans-serif",
                width: "200px",
                paddingTop: "15px",
                paddingBottom: "10px",
                color: "white",
                marginLeft: 5,
                marginTop: 25,
                
              }}
              onClick={hanldeGoogleLogin}
            >
              Google Log In{" "}
              <LockOpenIcon sx={{ marginLeft: "5px", fontSize: "27px" }} />
            </Button>
            </div>
          
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
