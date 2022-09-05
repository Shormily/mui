import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "./Firstpart.css";

const Firstpart = () => {
  return (
    <>
      <div>
        <Container sx={{ flexGrow: 1 }}>
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
                  style={{ fontSize: "20px", marginBottom: "70px", color: "#f96000" }}
                >
                  Welcome to Seven Accounting
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
                  Virtual Assistance & Accounting Services
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
                  We provide a full spectrum of traditional tax and accounting
                  services. Let's make your business more successful - talk to
                  our accounting experts today!
                </Typography>
                <br />
                <div style={{display:"flex", marginTop:"40px"}}>
                <Grid  xs={12} md={6} >
                 
                 
                 <Button  style={{backgroundColor:"#f96000", fontWeight: 900, fontFamily: "'M PLUS Rounded 1c', sans-serif",width:"280px",paddingTop:"20px",paddingBottom:"18px",color:"white"}}>Schedule free consultation</Button>
               </Grid>
               
                </div>
                
              </Box>
            </Grid>
            <Grid item xs={12} md={6} mt={7}>
              <Swiper
                spaceBetween={30}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img
                    style={{ width: "550px", height: "550px" }}
                    src={img7}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "550px", height: "550px" }}
                    src={img3}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "550px", height: "550px" }}
                    src={img5}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "550px", height: "550px" }}
                    src={img6}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    style={{ width: "550px", height: "550px" }}
                    src={img4}
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Firstpart;
