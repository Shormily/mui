import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../images/doctor.png";
import apbg from "../images/apbg.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const appointmentBg = {
    background: `url(${apbg})`,
    backgroundColor: "rgba(45, 58, 74, 0.9)",
    backgroundBlendMode: " darken, luminosity",
    marginTop: 200,
};
const Appointment = () => {
    return (
        <>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: "-120px" }}
                            src={doctor}
                            alt=""
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        style={{ color: "white" }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography variant="h6">Appointment</Typography>
                            <Typography variant="h4">Make an Appointment today</Typography>
                            <Typography
                                variant="h6"
                                style={{ color: "white", fontSize: 14, fontWeight: 300 }}
                            >
                                Sit consetetur invidunt diam sea eos, rebum eirmod ipsum
                                aliquyam lorem nonumy amet. Eirmod dolor magna rebum lorem
                                invidunt. Duo.
                            </Typography>
                            <Button variant="contained">Larn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Appointment;
