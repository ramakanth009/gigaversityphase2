import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Blogg from "../../../Assets/blogg.svg";
import Letter from "../../../Assets/letter.svg";

const useStyles = makeStyles(() => ({
  newsmain: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #E4F2FF 31%, #D0E8FF 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "20px 20px 20px 10px",
    padding: "50px 150px",
    gap: "20px",
    borderRadius: "55px",
  },
  newscontent: {
    textAlign: "left",
    fontWeight: "bold !important",
    letterSpacing: "2px !important",
    fontSize: "1.2rem !important",
  },
  newssub: {
    display: "flex",
    gap: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
  },
  newsblog: {
    padding: "8px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  newssubscribe: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E90FF",
    padding: "8px",
    borderRadius: "20px",
    position: "relative",
    animation: "$slideInRight 1s ease-in-out",
  },
  subscribeText: {
    textTransform: "capitalize",
    letterSpacing: "2px !important",
  },
  "@keyframes slideInRight": {
    "0%": {
      transform: "translateX(-100%)",
      opacity: "0",
    },
    "100%": {
      transform: "translateX(0)",
      opacity: "1",
    },
  },
}));

const Newslettermain = ({
  content,
  blogLabel,
  subscribeLabel,
  //   subscribeLabel = "Subscribe to our free Newsletter"
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.newsmain}>
      <Typography
        variant="body1"
        color="initial"
        className={classes.newscontent}
      >
        {content}
      </Typography>
      <Box className={classes.newssub}>
        <Box className={classes.newsblog}>
          <img src={Blogg} alt="Blogg" />
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontWeight: "bold !important",
              textTransform: "capitalize",
              letterSpacing: "2px !important",
            }}
          >
            {blogLabel}
          </Typography>
        </Box>
        <Box className={classes.newssubscribe}>
          <img src={Letter} alt="Letter" />
          <Typography
            variant="body1"
            color="white"
            className={classes.subscribeText}
          >
            {subscribeLabel}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Newslettermain;
