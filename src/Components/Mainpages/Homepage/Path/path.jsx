import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Enroll from "../../../../Assets/enroll.png";
import Study from "../../../../Assets/study.png";
import Master from "../../../../Assets/master.png";
import hired from "../../../../Assets/hired.png";

const Path = () => {
  const classes = useStyles();
  return (
    <Box className={classes.path_main}>
      <Typography variant="h3" color="initial">
        Experience the Difference that Drives Success
      </Typography>
      <Box className={classes.path_boxes} >
        <Box className={classes.path_box}>
          <img src={Enroll} alt="enroll" />
          <Typography variant="h4" color="initial">
            Enroll
          </Typography>
        </Box>
        <Box className={classes.path_box}>
          <img src={Study} alt="enroll" />
          <Typography variant="h4" color="initial">
            Study Practically
          </Typography>
        </Box>
        <Box className={classes.path_box}>
          <img src={Master} alt="enroll" />
          <Typography variant="h4" color="initial">
            Master Skills
          </Typography>
        </Box>
        <Box className={classes.path_box}>
          <img src={hired} alt="enroll" />
          <Typography variant="h4" color="initial">
            Get Hired
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Path;
