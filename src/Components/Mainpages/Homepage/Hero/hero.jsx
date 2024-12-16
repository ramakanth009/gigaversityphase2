import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "./styles";
import heroImage from "../../../../Assets/Group-5582.jpg"; // Import the image

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.herosec}>
      <img src={heroImage} alt="hero" className={classes.heroimg} />
    </Box>
  );
};

export default Hero;
