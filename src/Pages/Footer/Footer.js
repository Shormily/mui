import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import fot1 from "../images/fot1.png";
import "./Footer.css";

const bannerColor = {
  background: "rgb(58, 57, 77)",
  marginTop: "50px",
};

const Footer = () => {
  return (
    <div style={bannerColor}>
      <Container>
        <Grid  container spacting={2}>
          <Grid sx={{ mt: 20}} item xs={12} md={6} lg={3}>
            <img className="logos" src={fot1} alt="" />
          </Grid>
          <Grid sx={{ mt: 20 }} item xs={12} md={6} lg={3}>
            <Typography mb={2} sx={{ mb: 5, color: "gray" }} variant="p" gutterBottom>
              Services
            </Typography>
            <br />
            <br />
            <Typography sx={{ color: "white" }} variant="p" gutterBottom>
              Helping to start a business
              <br />
              Tax advisory & filing
              <br />
              Monthly bookkeeping
              <br />
              Payroll services
              <br />
              Wealth management
            </Typography>
          </Grid>
          <Grid sx={{  mt: 20 }} item xs={12} md={6} lg={3}>
          <Typography mb={2} sx={{ mb: 5, color: "gray" }} variant="p" gutterBottom>
          Company
            </Typography>
            <br />
            <br />
            <Typography sx={{ color: "white" }} variant="p" gutterBottom>
            About us
              <br />
              News & articles
              <br />
              FAQs
              <br />
              Contact
              <br />
              Terms & conditions
              <br />
              Demo design system
              <br />
              Under construction
              <br />
              404 Error page
            </Typography>
          </Grid>
          <Grid sx={{  mt: 20 }} item xs={12} md={6} lg={3}>
          <Typography mb={2} sx={{ mb: 5, color: "gray" }} variant="p" gutterBottom>
          Connect
            </Typography>
            <br />
            <br />
            <Typography sx={{ color: "white" }} variant="p" gutterBottom>
            About us
              <br />
              1-001-234-5678
              <br />
             hello@dream-theme.com
              <br />
              
            </Typography>
            <br/>
      
          </Grid>
        </Grid>
        <Grid sx={{  mt: 10,pb:14 }}>
        <Typography sx={{ color: "white",mt:4,mb:35 }} variant="p" gutterBottom>
        © 2022 Seven Accounting. All rights reserved.
              
            </Typography>
        </Grid>
        
      </Container>
    </div>
  );
};

export default Footer;
