import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const BookingModal = (openBooking,handleBookingClose,bookings) => {
   const {name, time} = bookings;
//    const handleBookingSubmit = e =>{
//        alert('submitting')

//        handleBookingClose();
//        e.preventDefault();
//    }

    return (
        <>
          <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
       
      >
          <Fade in={openBooking}>
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {time}
          </Typography>
          <Button type="submit" varient="contained">
              Submit
          </Button>
        </Box>
          </Fade>
        
      </Modal>   
        </>
    );
};

export default BookingModal;