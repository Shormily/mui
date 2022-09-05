import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import img2 from "../images/img2.png";
import img24 from "../images/img24.png";
import img1 from "../images/img1.png";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

import "./Firstpart3.css";
import Explain from "../Explain/Explain";
import Muicard from "../Muicard/Muicard";

const Firstpart3 = () => {
  return (
    <>
      <Container>
      

     
<Explain/>

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
          }}
        >
          Why Seven Accounting? Powerful financial reporting
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <img
              style={{ width: "100%" }}
              src={img2}
              alt=""
            />
          </Grid>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <Typography
              variant="h2"
              mt={5}
              mb={5}
              sx={{
                fontSize: 30,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                textAlign: "center",
                marginTop: "53px",
              }}
            >
              One-on-one expert support
            </Typography>
            <Typography
              variant="p"
              mt={5}
              sx={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 600,
                color: "gray",
                fontSize: "17px",
              }}
            >
              Phasellus aliquam vehicula mauris et elementum. Sed nisl risus,
              maximus non tortor vel, vestibulum condimentum ipsum. Ut convallis
              molestie imperdiet. Sed scelerisque sodales elementum. Morbi at
              leo tortor. Etiam quis gravida nunc, id euismod risus. Morbi id
              viverra dui.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
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
              }}
            >
              Powerful financial reporting
            </Typography>
            <Typography
              variant="p"
              mt={5}
              sx={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 600,
                color: "gray",
                fontSize: "17px",
              }}
            >
              Phasellus aliquam vehicula mauris et elementum. Sed nisl risus,
              maximus non tortor vel, vestibulum condimentum ipsum. Ut convallis
              molestie imperdiet. Sed scelerisque sodales elementum. Morbi at
              leo tortor. Etiam quis gravida nunc, id euismod risus. Morbi id
              viverra dui.
            </Typography>
          </Grid>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <img
              style={{ width: "100%" }}
              src={img1}
              alt=""
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <img
              style={{ width: "100%" }}
              src={img24}
              alt=""
            />
          </Grid>
          <Grid
            item
            style={{ textAlign: "left", marginTop: "80px" }}
            xs={12}
            md={6}
          >
            <Typography
              variant="h2"
              mt={5}
              mb={5}
              sx={{
                fontSize: 30,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                textAlign: "center",
                marginTop: "53px",
              }}
            >
              Affordable flat-rate pricing
            </Typography>
            <Typography
              variant="p"
              mt={5}
              sx={{
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 600,
                color: "gray",
                fontSize: "17px",
              }}
            >
              Phasellus aliquam vehicula mauris et elementum. Sed nisl risus,
              maximus non tortor vel, vestibulum condimentum ipsum. Ut convallis
              molestie imperdiet. Sed scelerisque sodales elementum. Morbi at
              leo tortor. Etiam quis gravida nunc, id euismod risus. Morbi id
              viverra dui.
            </Typography>
          </Grid>
        </Grid>
      </Container >
      <div className="theme">
        
        <Grid spacing={3} pb={10} pt={4} mt={10}>
          <Container>
            <Typography
              variant="h2"
              mt={5}
              mb={5}
              sx={{
                fontSize: 40,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 800,
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              Join thousands of business owners
              <br />
              who trust Seven Accounting!
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid>
                <Button
                  style={{
                    backgroundColor: "#f96000",
                    fontWeight: 900,
                    fontFamily: "'M PLUS Rounded 1c', sans-serif",
                    width: "280px",
                    paddingTop: "20px",
                    paddingBottom: "15px",
                    color: "white",
                  }}
                >
                  <PhoneCallbackIcon />
                  Request a call-back
                </Button>
              </Grid>
            </div>
          </Container>
        </Grid>
      </div>
      <Muicard/>
    </>
  );
};

export default Firstpart3;
