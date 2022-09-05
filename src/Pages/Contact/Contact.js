import { Box, Container, Grid, TextField, Typography,Button } from '@mui/material';
import img8 from "../images/img8.png"
import React from 'react';

import SendIcon from '@mui/icons-material/Send';
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const Contact = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <>
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
         Contact Us
        </Typography> 
        <Container sx={{ flexGrow: 1,display:"flex" }}>
        <Box sx={{ flexGrow: 1,marginBottom:12 ,marginTop:10 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
       <img src={img8} style={{width:"100%"}} alt=""/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} mt={10}>
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
          style={{width:"90%"}}
        />
        <br/>
        <br/>
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
          style={{width:"90%",fontFamily:"'Lato', sans-serif",fontWeight:"500"}}
        />
         <br/>
         <br/>
        <TextField
          id="outlined-multiline-static"
          label="Send Me A Message"
          multiline
          rows={4}
         
          style={{width:"90%",fontFamily:"'Lato', sans-serif",fontWeight:"500"}}
        />
        <br/>
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
              
            Send Me message <SendIcon sx={{marginLeft:"5px",fontSize:"27px"}} />
            </Button>
        </Grid>
    
     
      
        
         
        </Grid>
        </Box>
        </Container>
        </>
        
        
    );
};

export default Contact;