import { Container,Grid, Typography } from '@mui/material';
import React from 'react';

const bannerColor = {
    background: "rgb(10, 68, 175)",
    marginTop:"50px",
    
}

const Footer = () => {
    return (
        <div style={bannerColor} >
         
          <Container>
          <Grid  sx={{ p: 8}} container spacting={2}>
          <Grid sx={{ mt: 2 }} item xs={12} md={4}>
          <Typography
              sx={{ color: "white" }}
              variant="h4"
              gutterBottom
            >
              Medical Clinic
            </Typography>
          <Typography
              sx={{ mb: 10, color: "white" }}
              variant="p"
              gutterBottom
            >
             We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.
            </Typography>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={12} md={4}>
          <Typography
              sx={{ color: "white" }}
              variant="h4"
              gutterBottom
            >
              Medical Clinic
            </Typography>
          <Typography
              sx={{ mb: 10, color: "white" }}
              variant="p"
              gutterBottom
            >
             We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.
            </Typography>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={12} md={4}>
          <Typography
              sx={{ color: "white" }}
              variant="h4"
              gutterBottom
            >
              Medical Clinic
            </Typography>
          <Typography
              sx={{ mb: 10, color: "white" }}
              variant="p"
              gutterBottom
            >
             We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.
            </Typography>
          </Grid>
          
          </Grid>
         
          </Container>
        </div>
    );
};

export default Footer;