import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import cavity from "../images/cavity.png";
import flouride from "../images/fluoride.png";
import whitening from "../images/whitening.png";
import Typography from '@mui/material/Typography';

const services = [
  {
    name: "Fluorite Treatment",
    description:
      "Dolor diam stet clita clita tempor ea dolor sit. Dolor dolores invidunt clita sit accusam labore gubergren labore, dolor et.",
    img: flouride
  },
  {
    name: "Cavity Treatment",
    description:
      "Dolor diam stet clita clita tempor ea dolor sit. Dolor dolores invidunt clita sit accusam labore gubergren labore, dolor et.",
    img: cavity
  },
  {
    name: "Whitening Treatment",
    description:
      "Dolor diam stet clita clita tempor ea dolor sit. Dolor dolores invidunt clita sit accusam labore gubergren labore, dolor et.",
    img: whitening
  }  
  
];

const Services = () => {
  return (
    <>
      <Box  sx={{ flexGrow: 1, m:5 }}>
        <Container>
        <Typography align="center" variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography align="center" variant="h4" component="div" sx={{ fontWeight: 500, color: 'info.main' }}>
          SERVICES WE PROVIDE
        </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map(service => <Service
            key={service.name}
            service={service}
            
            ></Service>)}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
