import React from "react";
// import { useStyles } from "./fee-styles";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import Fee1 from "../../../Assets/fee1.svg";
import Fee2 from "../../../Assets/fee2.svg";
import Fee3 from "../../../Assets/fee3.svg";


export const useStyles = makeStyles(() => ({
  feemain: {
    margin: "20px 45px",
    borderRadius: "20px",
    backgroundSize: "cover",
    "@media (max-width:1200px)": {
      margin: "20px 20px",
    },
    "@media (max-width:600px)": {
      margin: "10px 10px",
    }
  },

  feeboxes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "100px",
    padding: "20px",
    marginBottom: "30px",
    "@media (max-width:1200px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
    "@media (max-width:600px)": {
      padding: "10px",
      gap: "20px",
    }
  },

  feehead: {
    fontWeight: "bold!important",
    textTransform: "uppercase",
    textAlign: "center",
    padding: "40px 20px 50px 20px",
    "@media (max-width:600px)": {
      fontSize: "1.5rem !important",
      padding: "20px 10px 30px 10px",
    }
  },

  feebox: {
    background: "#ffffff",
    width: "20%",
    minHeight: "420px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
    borderRadius: "32px",
    "@media (max-width:1200px)": {
      width: "60%",
      minHeight: "auto",
    },
    "@media (max-width:600px)": {
      width: "90%",
      padding: "15px",
    }
  },

  feeimg: {
    margin: "30px 30px !important",
    height: "80px",
    "@media (max-width:600px)": {
      margin: "20px 20px !important",
      height: "60px",
    }
  },

  feesubhead: {
    color: "#1E90FF !important",
    fontWeight: "bold !important",
    height: "80px",
    width: "90%",
    padding: "0 5px",
    textWrap: "balance",
    "@media (max-width:600px)": {
      height: "auto",
      fontSize: "1.2rem !important",
    }
  },

  feesubcontext: {
    fontSize: "1.050rem !important",
    padding: "0 10px",
    textTransform: "capitalize",
    "@media (max-width:600px)": {
      fontSize: "0.9rem !important",
    }
  },

  feesubbold: {
    fontWeight: "bold",
    fontSize: "1.2rem"
  }
}));

// Define fee data as an array of objects
const feeData = [
  {
    icon: Fee1,
    title: "Course Fee",
    description: "Starting from",
    amount: "INR 7,084",
    details: "/ month",
    boldDetails: "Flexible EMI",
    boldDetailsExtra: "options available for up to 24 months."
  },
  {
    icon: Fee2,
    title: "Scholarship Opportunity", 
    description: "If you believe you qualify for a more affordable price,",
    boldDetails: "apply for a scholarship",
    details: "to potentially receive financial assistance based on merit and need."
  },
  {
    icon: Fee3,
    title: "Support for Physically Challenged Individuals",
    description: "We are proud to offer",
    boldDetails: "free seats",
    details: "for physically challenged individuals, subject to eligibility and terms and conditions."
  }
];

const Feemain = ({ backgroundImage = require("../../../Assets/feebackground.png") }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.feemain}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h4" color="initial" className={classes.feehead}>
        Fee structure for Data Science program
      </Typography>
      <Box className={classes.feeboxes}>
        {feeData.map((item, index) => (
          <Box key={index} className={classes.feebox}>
            <Box className={classes.feeimg}>
              <img src={item.icon} alt={`fee icon ${index + 1}`} />
            </Box>
            <Typography
              variant="h6"
              color="initial"
              className={classes.feesubhead}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              className={classes.feesubcontext}
            >
              {item.description && <>{item.description}<br /></>}
              {item.amount && (
                <>
                  <span className={classes.feesubbold}>{item.amount} </span> 
                  {item.details}
                  <br />
                </>
              )}
              {item.boldDetails && (
                <span className={classes.feesubbold}>{item.boldDetails} </span>
              )}
              {item.boldDetailsExtra && <>{item.boldDetailsExtra}</>}
              {item.details && !item.amount && <>{item.details}</>}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Feemain;