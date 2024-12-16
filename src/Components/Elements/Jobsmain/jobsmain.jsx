import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useJobCardStyles = makeStyles(() => ({
  jobbox: {
    background: "linear-gradient(180deg, #D0E8FF 0%, #8AC7FF 15%, #FFFFFF 35.5%, #FFFFFF 50%, #BCDEFF 67.5%, #D0E8FF 100%)",
    width: "calc((100% / 3) - 160px)", // Default width for larger screens (3 per row)
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "40px",
    transition: "all 0.3s ease-in-out", // Smooth transition for responsive changes
    position: "relative",
    "@media (max-width: 1200px)": {
      width: "calc((100% / 2) - 30px)", // 2 per row for medium screens
    },
    "@media (max-width: 768px)": {
      width: "calc(100% - 40px)", // Full width for smaller screens
    },
  },
  jobicon: {
    backgroundColor: "#ffffff",
    padding: "20px 45px",
    borderRadius: "20px",
    marginTop: "15px",
  },
  jobdetails: {
    height: "160px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  jobrole: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
    width: "90%",
  },
  joblevel: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  joblocation: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  jobcost: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  applybutton: {
    backgroundColor: "#1E90FF !important",
    borderRadius: "10px !important",
    padding: "8px 60px !important",
    position: "absolute",
    bottom: "-11px",
  },
}));

const Jobmain = ({ icon, role, experience, location, salary }) => {
  const classes = useJobCardStyles();

  return (
    <Box className={classes.jobbox}>
      <img src={icon} alt="job icon" className={classes.jobicon} />
      <Box className={classes.jobdetails}>
        <Typography 
          variant="h5" 
          color="initial" 
          className={classes.jobrole}
        >
          {role}
        </Typography>
        <Typography 
          variant="body1" 
          color="initial" 
          className={classes.joblevel}
        >
          Experience: {experience}
        </Typography>
        <Typography 
          variant="body1" 
          color="initial" 
          className={classes.joblocation}
        >
          Job Location: {location}
        </Typography>
        <Typography 
          variant="body1" 
          color="initial" 
          className={classes.jobcost}
        >
          Entry-Level: {salary}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        className={classes.applybutton}
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default Jobmain;