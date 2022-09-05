import { Container, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Cards/Cards";

const Product = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Container >
        <Grid container mt={5} spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} md={4}>
              <Card
                key={services.id}
                service={service}
                setServices={setServices}
              ></Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Product;
