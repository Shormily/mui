import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../Hooks/useAuth";
import  "./Nav.css";
// import useAuth from "../Hooks/useAuth";
// import useFirebases from "../Hooks/useFirebases";
// import useAuth from '../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              to="/appointment"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Appointment</Button>
            </NavLink>
           
           

           
             {!user?.email && (
               <NavLink
              to="/logins"
              style={{ textDecoration: "none", color: "white" }}
            >
            <Button color="inherit">Log In</Button>
            </NavLink>
               
              )}
              

              {user?.email && (
                
                 <NavLink
              to="/logins"
              onClick={logout}
              style={{ textDecoration: "none",  color: "white" }}
            >
               <span>
                {user?.photoURL ? (
                  
                  <img 
                    
        className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-light ms-3">{user?.displayName}</small>
                )}
              </span>
               </NavLink>
              )} 
            {/* Ata react router v5 so shie roule a kaj krta hobe.. */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
