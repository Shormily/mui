import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Checkbox, Container, Grid, TableRow } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } }


export default function Cards({ service, setServices }) {
  const { _id, name, img, description } = service;
  

  

  return (
    <div >
     
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#f96000" }} aria-label="recipe">
                      A
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={name}
                  // subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={img}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
               
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                  <Checkbox    sx={{
          color: "#f96000",
          '&.Mui-checked': {
            // color: pink[600],
            color:"#f96000"
            
          },
        }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </IconButton>
                  <CardActions>
        <Button sx={{
          color: "#f96000"
        
        }}  size="large">See Details</Button>
      </CardActions>
                  
                </CardActions>
              
              </Card>
            
    </div>
  );
}
