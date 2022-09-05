import { Box, Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import img4 from "../images/img4.png";
import img7 from "../images/img7.png";
import CheckIcon from "@mui/icons-material/Check";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LanguageIcon from '@mui/icons-material/Language';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import React from "react";
import Testimonial from "../Testimonial/Testimonial";

const About = () => {
  return (
    <>
      <Typography
        variant="h2"
        mt={5}
        mb={5}
        sx={{
          fontSize: 50,
          fontFamily: "'Lato', sans-serif",
          fontWeight: 900,
          textAlign: "center",
          
        }}
      >
        About US
      </Typography>
      <Container sx={{marginBottom:"30px"}}>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant="p"
                style={{
                  fontSize: "20px",
                  marginBottom: "70px",
                  color: "#f96000",
                }}
              >
                Our Story
              </Typography>
              <br />
              <Typography
                variant="h2"
                mt={5}
                mb={5}
                sx={{
                  fontSize: 50,
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 900,
                }}
              >
                Reliable & affordable accounting services for your business
              </Typography>
              <Typography
                variant="p"
                mt={5}
                sx={{
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 900,
                  color: "gray",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Donec aliquam sed elit ante – non interdum consectetur arcu.
                <br />
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo. Donec sed neque ac dui lobortis aliquam.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
            mb={5}
          >
            <img style={{ width: "100%" }} src={img4} alt="" />
          </Grid>
        </Grid>
      


      
      </Container>
      <div className="theme">
        <Container>
        <Grid container spacing={2} >
          <Grid
            item
            style={{  marginTop: "80px" , marginBottom:"70px", textAlign:"center", justifyContent:"center"}}
            xs={12}
            md={4}
            lg={4}
          >
            <LanguageIcon sx={{fontSize:"50px",color:"gray"}}/>
            <p>We operate in
              <br/>
              15 Countries
             </p>
          </Grid>
          <Grid
            item
            style={{  marginTop: "80px",textAlign:"center", justifyContent:"center" }}
            xs={12}
            md={4}
            lg={4}
          >
             <LocalMallIcon sx={{fontSize:"50px",color:"gray"}} />
             <p>Our Experience
              <br/>
              20 Years
             </p>
            
          </Grid>
          <Grid
            item
            style={{ marginTop: "80px",textAlign:"center", justifyContent:"center" }}
            xs={12}
            md={4}
            lg={4}
          >
             <GroupAddIcon sx={{fontSize:"50px",color:"gray"}} />
             <p>We currently serve to
              <br/>
              200 000+ clients
             </p>
          </Grid>
          </Grid>
        </Container>
          
          </div>
      <Container>
      <Grid container spacing={2}>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <img style={{ width: "100%",marginBottom:"30px" }} src={img7} alt="" />
          </Grid>

          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="p"
                style={{
                  fontSize: "20px",
                  marginBottom: "70px",
                  color: "#f96000",
                }}
              >
                Our missiom
                <br />
              </Typography>
              <br />
              <Typography
                variant="p"
                sx={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 900,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Donec sed neque ac dui lobortis aliquam.
                <br />
                <br />
              </Typography>
              <Typography
                variant="p"
                mt={5}
                style={{
                  fontSize: "20px",
                  marginBottom: "70px",
                  color: "#f96000",
                }}
              >
                Our values
                <Typography
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 900,
                    fontSize: "18px",
                    color: "black",
                    marginBottom: "30px",
                  }}
                >
                  <CheckIcon sx={{ mr: 2, mt: 3, color: "#f96000" }} /> Customer
                  success is our priority
                  <br />
                  <CheckIcon sx={{ mr: 2, color: "#f96000" }} />
                  Top quality & constant growth
                  <br />
                  <CheckIcon sx={{ mr: 2, color: "#f96000" }} />
                  Ecological materials & production
                  <br />
                  <CheckIcon sx={{ mr: 2, color: "#f96000" }} />
                  New technologies
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <div className="theme">
        <Grid sx={{ textAlign: "center", padding: 10 }}>
          <Typography
            variant="h2"
            mt={5}
            mb={5}
            sx={{
              fontSize: 40,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 900,
            }}
          >
            Reliable & affordable accounting services for your business
          </Typography>
          <Typography
            variant="p"
            mt={3}
           
            sx={{
              fontSize: 20,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
            }}
          >
            Wondering ipsum dolor sit amet? We consectetur adipiscing ipsum
            <br />
            nulla glavrida elit tempor incididunt ut labore.
          </Typography>

          <div className="d-flex" xs={12} md={6} lg={6}>
            <Button
              style={{
                backgroundColor: "#f96000",
                fontWeight: 900,
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                width: "200px",
                paddingTop: "20px",
                paddingBottom: "15px",
                color: "white",
                marginLeft: 5,
                marginTop: 25,
              }}
            >
              <PhoneCallbackIcon />
              Request a call-back
            </Button>
            <Button
              style={{
                
                fontWeight: 900,
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                width: "200px",
                paddingTop: "20px",
                paddingBottom: "15px",
                color: "black",
                marginLeft: 5,
                marginTop: 25,
              }}
            >
              <PhoneCallbackIcon />
              Request a call-back
            </Button>
          </div>
        </Grid>
      </div>


<Testimonial/>
      
    </>
  );
};

export default About;
