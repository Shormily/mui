import React from 'react';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { Container, Grid, Typography,  Box } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';
import CalculateIcon from '@mui/icons-material/Calculate';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Explain = () => {
    return (
        <>
        <Container>
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
         How can we help you?
        </Typography>
        <Box sx={{ flexGrow: 1,marginBottom:12 ,marginTop:10 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
            
          }}
        >
            <StackedLineChartIcon   sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
        Helping to start a business 
        
         
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
          }}
        >
            <PostAddIcon  sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
         Tax advisory & filling
        
         
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
          }}
        >
            <CalculateIcon   sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
         Monthly bookkeeping
        
         
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
          }}
        >
            <CurrencyExchangeIcon   sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
        Payroll
        
         
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
          }}
        >
            <HomeWorkIcon   sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
         Wealth management
        
         
        </Typography> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <Typography
          variant="p"
          mt={5}
          mb={5}
          sx={{
            fontSize: 25,
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            textAlign: "center",
            marginTop: "50px",
            
            
          }}
        >
            <MoreHorizIcon   sx={{fontSize:"40px",backgroundColor:"#f96000",padding:"4px",mr: 2,mt: 3}}  />
        Other financial service
        
         
        </Typography> 
        </Grid>
         
        </Grid>
        </Box>

        </Container>
          
        </>
    );
};

export default Explain;

