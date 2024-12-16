import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Campusmain from "../../../Elements/Campusmain/campusmain";

// Styles for CampusMain
const useStyles = makeStyles(() => ({
  campusSection: {
    margin: "20px 0",
    width: "100%",
  },
  campusTitle: {
    textAlign: "center",
    fontWeight: "bold !important",
    marginBottom: "20px",
  },
}));

// CampusMain Component
const Campus = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={classes.campusSection}>
        <Typography
          variant="h4"
          color="initial"
          className={classes.campusTitle}
        >
          Campus Immersion : Onboard Your Industry Experience
        </Typography>

        <Campusmain />
      </Box>
    </Container>
  );
};

export default Campus;
