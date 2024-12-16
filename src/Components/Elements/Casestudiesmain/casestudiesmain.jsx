import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  casemain: {
    marginBottom: "30px",
    padding: "0 10px",
  },
  casetitle: {
    fontWeight: "bold !important",
    textTransform: "uppercase !important",
    textAlign: "center",
    margin: "30px 0 !important",
    fontSize: "1.5rem !important",
    "@media (max-width: 600px)": {
      fontSize: "1.2rem !important",
    },
  },
  caseset: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      gap: "20px",
      margin: "40px",
    },
  },
  casebox: {
    textTransform: "uppercase !important",
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "350px",
    minHeight: "350px",
    border: "1px solid #000",
    flexDirection: "column",
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "#D0E8FF",
      border: "1px solid #D3EAFF",
      transform: "scale(1.03)",
    },
    "@media (min-width: 768px)": {
      width: "calc(33.333% - 20px)",
    },
  },
  caseboxtitle: {
    minHeight: "30px !important",
    display:'flex',
    justifyContent:"center",
    alignItems:"flex-start",
    fontWeight: "bold !important",
    fontSize: "1.2rem !important",
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
  },
  caseboximg: {
    minHeight: "90px !important",
    maxWidth: "150px",
    height: "auto",
    "@media (max-width: 600px)": {
      maxWidth: "100px",
    },
  },
  caseboxdescription: {
    minHeight: "100px !important",
    fontSize: "0.9rem !important",
    "@media (max-width: 600px)": {
      fontSize: "0.8rem !important",
    },
  },
}));

const Casestudiesmain = ({
  items = [],
  title = "Actionable Insights : Case Studies from Leading Industry Brands",
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.casemain}>
      <Typography variant="h4" color="initial" className={classes.casetitle}>
        {title}
      </Typography>
      <Box className={classes.caseset}>
        {items.map((item, index) => (
          <Box key={index} className={classes.casebox}>
            <img
              src={item.image}
              alt={item.title}
              className={classes.caseboximg}
            />
            <Typography
              variant="h6"
              color="initial"
              className={classes.caseboxtitle}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.caseboxdescription}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Casestudiesmain;
