import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Chathead from "../../../../Assets/chathead.png";

const Chatwithus = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chatwith_main}>
      <Typography
        variant="h3"
        color="initial"
        sx={{ color: "#006BD3", fontFamily: "var(--font-primary) !important", marginBottom:"40px" }}
      >
        Have any further Questions?
      </Typography>
      <Box className={classes.chatwith_box}>
        <Typography variant="h3" color="initial" sx={{fontFamily: "var(--font-primary) !important" }}>
          Chat With Us Now
        </Typography>
      </Box>
        <img src={Chathead} alt="headphones" className={classes.chatheadphones}/>
    </Box>
  );
};

export default Chatwithus;
