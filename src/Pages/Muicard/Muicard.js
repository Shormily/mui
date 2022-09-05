import { Box,Grid } from '@mui/material';
import React from 'react';

const Muicard = () => {
    
    return (
        <>
         <Box sx={{ flexGrow: 1,marginBottom:12 ,marginTop:10 }}>
         <Grid container spacing={2}>
         <Grid item xs={12} sm={12} md={6} lg={4}></Grid>  
         <Grid item xs={12} sm={12} md={6} lg={4}></Grid>  
         <Grid item xs={12} sm={12} md={6} lg={4}></Grid>  
         </Grid>
         </Box>
      
        
        </>
    );
};

export default Muicard;