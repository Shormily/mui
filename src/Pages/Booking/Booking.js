import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking,date }) => {
    const { name, time, space } = booking;
      const [setBookingOpen] = React.useState(false);
    //   const [openBooking, setBookingOpen] = React.useState(false);
      const handleBookingOpen = () => setBookingOpen(true);
    //   const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 5 }}>
                    <Typography
                        sx={{ color: "primary.main" }}
                        variant="h5"
                        gutterBottom
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="bllock" gutterBottom>
                        {space}SPACE AVAILABLE
                    </Typography>
                    <Button
                    onClick={handleBookingOpen}
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            {/* <BookingModal
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            
            >

            </BookingModal> */}

        </>
    );
};

export default Booking;
