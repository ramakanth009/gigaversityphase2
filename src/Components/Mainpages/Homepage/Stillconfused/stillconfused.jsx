import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Confusedman from "../../../../Assets/stillconfused.png"

const Stillconfused = () => {
  const classes = useStyles();
  return (
    <Box className={classes.stillconfused}>
      <Box className={classes.scbox1}>
        <Typography variant="h3" color="initial" sx={{fontWeight:"bold",marginBottom:"30px"}}>
          Still Confused ?
        </Typography>
        <Typography variant="h4" color="initial">
          Unlock Your Clarity with a Personalized Quiz! Take the Quiz and
          Discover Your Path!
        </Typography>
      </Box>
      <Box className={classes.scbox2}>
        <img src={Confusedman} alt="Confusedman" />
      </Box>
    </Box>
  );
};

export default Stillconfused;
