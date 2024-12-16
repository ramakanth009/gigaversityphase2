import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Styles for Campus component
const useStyles = makeStyles(() => ({
  campusContent: {
    margin: "20px 80px",
    '@media (max-width: 1024px)': {
      margin: "20px 40px",
    },
    '@media (max-width: 768px)': {
      margin: "20px 20px",
    },
    '@media (max-width: 480px)': {
      margin: "10px 10px",
    },
  },

  campusItem: {
    textAlign: "left",
    width: "80%",
    padding: "0 120px",
    marginBottom: "20px",
    '@media (max-width: 1200px)': {
      width: "90%",
      padding: "0 60px",
    },
    '@media (max-width: 768px)': {
      width: "100%",
      padding: "0 20px",
    },
    '@media (max-width: 480px)': {
      width: "100%",
      padding: "0 10px",
    },
  },
  cbold: {
    fontWeight: "bold",
    color: "#035CB4!important",
  },
  campusText: {
    fontWeight: "bold !important",
    fontSize: "1.5rem !important",
    '@media (max-width: 768px)': {
      fontSize: "1.2rem !important",
    },
    '@media (max-width: 480px)': {
      fontSize: "1rem !important",
    },
  },
}));

// Campus Component
const Campusmain = () => {
  const classes = useStyles();

  // Dynamic content array - can be easily modified or fetched from an API
  const campusItems = [
    {
      title: "Earn Your Spot",
      description:
        "A competitive opportunity for students who demonstrate dedication and excellence.",
    },
    {
      title: "Direct Placement Opportunities",
      description:
        "Access recruitment drives and job openings with 100+ top hiring partners.",
    },
    {
      title: "Skill Enhancement",
      description:
        "Acquire practical skills and industry knowledge to elevate your career prospects.",
    },
    {
      title: "Professional Exposure",
      description:
        "Collaborate with experts and gain real-world insights into the professional workspace.",
    },
  ];

  return (
    <Box className={classes.campusContent}>
      {campusItems.map((item, index) => (
        <Box key={index} className={classes.campusItem}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.campusText}
          >
            <span className={classes.cbold}>{item.title} : </span>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Campusmain;