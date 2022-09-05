import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Grid from "@mui/material/Grid";
import so from "../images/so.png";
import so1 from "../images/so1.png";
import so2 from "../images/so2.png";
import so4 from "../images/so4.jpg";
import so3 from "../images/so3.jpg";
// import so5 from "../images/so5.jpg";

import img26 from "../images/img26.png";
import img27 from "../images/img27.png";
import img28 from "../images/img28.png";
import img29 from "../images/img29.png";
import img30 from "../images/img30.png";
import img31 from "../images/img31.png";
import img32 from "../images/img32.png";
import img33 from "../images/img33.png";
import "./Testimonial.css";
import { width } from "@mui/system";

const Testimonial = () => {
  return (
    <div >
      <Container sx={{ marginBottom: "130px"}}  >
        <Typography
          variant="h2"
          mt={5}
          mb={5}
          sx={{
            fontSize: 40,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "70px"
          }}
        >
          Client Testimonials
        </Typography>
    
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
         
        >
          <SwiperSlide >
            <Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
                Sohani Gill
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid>
           
          </SwiperSlide>

          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so1}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
            Siam Roy
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so2}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
                Sohani Gill
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so4}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
                Sohani Gill
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so2}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
               Hanky Roy
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so3}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
                Shormily Raisa
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so4}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
               Meelas Hors
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Kate & Rose Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
               Sohelix Dila
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Shirin Industry
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
          <SwiperSlide><Grid  style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={so1}
               
                sx={{ width: 60, height: 60 }}
              />
              <Typography
                variant="p"
                px={2}
                sx={{
                 
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontWeight: 600,
                  color: "gray",
                  fontSize: "20px",
                }}
              >
               Adonia Aliz
                <br />
                <Typography
                  variant="h6"
                 
                  sx={{
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    fontWeight: 600,
                    color: "brown",
                    fontSize: "17px",
                  }}
                >
                  Mohani & Cat Studio
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "'M PLUS Rounded 1c', sans-serif",
                      fontWeight: 600,
                      color: "gray",
                      fontSize: "15px",
                      textAlign:'center',
                      width:"5px"
                      
                    }}
                  >
                   I would heighly recommended Accountind to anyone.
                  
                   
                  </Typography>
                </Typography>
              </Typography>
             
           
            </Grid></SwiperSlide>
        </Swiper>



      </Container>
    </div>
  );
};

export default Testimonial;
