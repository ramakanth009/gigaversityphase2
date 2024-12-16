import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  costmain: {
    marginBottom: "20px",
    "@media (max-width: 1024px)": {
      padding: "0 10px",
    },
  },
  costhead: {
    textAlign: "center !important",
    textTransform: "uppercase !important",
    fontWeight: "bold !important",
    marginBottom: "15px !important",
    fontSize: "2rem !important",
    "@media (max-width: 768px)": {
      fontSize: "1.5rem !important",
    },
  },
  costmainbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: "0 20px",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      gap: "20px",
    },
  },
  costbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "20px",
    width: "30%",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  costimgbox:{
    height:"50%"
  },
  costimg: {
    maxWidth: "150px !important",
    maxHeight: "150px !important",
  },
  costtxt: {
    height:"50%",
    width: "100%",
    textTransform: "capitalize",
    minHeight: "140px",
    "@media (max-width: 768px)": {
      minHeight: "auto",
    },
  },
  costbold: {
    fontWeight: "bold !important",
  },
}));

const Costofmain = ({ headline, costSections }) => {
  const classes = useStyles();

  return (
    <Box className={classes.costmain}>
      <Typography variant="h4" color="initial" className={classes.costhead}>
        {headline}
      </Typography>
      <Box className={classes.costmainbox}>
        {costSections.map((section, index) => (
          <Box key={index} className={classes.costbox}>
            <Box className={classes.costimgbox}>
              <img
                src={section.icon}
                alt={`icon${index + 21}`}
                className={classes.costimg}
              />
            </Box>
            <Typography
              variant="body1"
              color="initial"
              className={classes.costtxt}
            >
              {section.text.map((textPart, textIndex) =>
                textPart.bold ? (
                  <span key={textIndex} className={classes.costbold}>
                    {textPart.content}
                  </span>
                ) : (
                  textPart.content
                )
              )}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Costofmain;
