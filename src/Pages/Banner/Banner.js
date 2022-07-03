import React from 'react';
import chair from "../images/chair.png";
import bg from "../images/bg.png";
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: "flex",
    alignItems: "center",
    height:400,
  
}

const Banner = () => {
    return (
        <div style={bannerBg}>
          <Container  sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter,textAlign:"left"}} xs={12} md={6}>
            <Box>
            <Typography variant='h3'>
              Your New Smile <br/>
              Starts Here
          </Typography>
          <Typography variant='h6' sx={{fontSize:14, fontWeight:300, color:"gray",my:3}}>
              Et eos rebum ipsum dolor at at et ut eos, magna sed kasd et et labore ea sed lorem takimata,.
          </Typography>
          <Button variant='contained' >Get Appointment</Button>
            </Box>
          
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
        <img style={{width: "400px"}} src={chair} alt=""/>
        </Grid>
        
      </Grid>
    </Container> 
        </div>
    );
};

export default Banner;