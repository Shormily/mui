import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid,Container } from '@mui/material';
import Booking from '../Booking/Booking';
 

const bookings = [
    {
    id:1,
    name:"Teeth Orthodonics",
    time:"08.00 AM - 09.00 AM",
    space:10,
},
    {
    id:2,
    name:"Cosmetic Dentistry",
    time:"06.00 AM - 02.00 AM",
    space:10,
},
    {
    id:3,
    name:"Teeth Cleaning",
    time:"10.00 AM - 12.00 AM",
    space:10,
},
    {
    id:4,
    name:"Pediatric Dental",
    time:"08.00 AM - 09.00 AM",
    space:10,
},
    {
    id:5,
    name:"Teeth Orthodonics",
    time:"05.00 AM - 09.00 AM",
    space:10,
},
    {
    id:6,
    name:"Oral Surgery",
    time:"02.00 AM - 05.00 AM",
    space:10,
}
]




const Appointmentavailable = ({date}) => {
    return (
        <Container>
            <Typography align="center" variant="h4" component="div" sx={{ fontWeight: 500, color: 'hotpink',padding:5 }} style={{textAlign:"center"}}>apoint available {date.toDateString()}</Typography>


            <Grid container spacing={2}>
               
                   {
                       bookings.map(booking =><Booking
                       key={booking.id}
                       booking={booking}
                       
                       
                       >



                       </Booking>)
                   }
                
            </Grid>
        </Container>
    );
};

export default Appointmentavailable;