import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import ApiAws from "../../../../Assets/api&aws.svg";

const Gemini = () => {
  const classes = useStyles();
  return (
    <Box className={classes.geminimain}>
      <Typography variant="h4" color="initial" className={classes.geminihead}>
        Master Industry-Standard Tools
      </Typography>
      <Box className={classes.geminicontent}>
        <Box className={classes.aibox2}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Exclusive Access to
            <span className={classes.geminipointsbold}>
              {" "}
              Gemini premium
            </span>{" "}
            for Generative AI & APIs – Worth $30
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Build Scalable Solutions with{" "}
            <span className={classes.geminipointsbold}>Advanced APIs</span>
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Accelerate Your{" "}
            <span className={classes.geminipointsbold}>Learning Curve</span>
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Stand Out in the{" "}
            <span className={classes.geminipointsbold}>Job Market</span>
          </Typography>
        </Box>
        <Box className={classes.aibox1}>
          <img src={ApiAws} alt="gemini logo" />
          {/* <Typography
            variant="h5"
            color="initial"
            className={classes.geminipro}
          >
            Premium Gemini Access Up to
            <br />
            $30 for One Year
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminigains}
          >
            <span className={classes.geminipointsbold}>
              Gain exclusive access to Gemini's premium features,
            </span>
            <br />
            enabling you to create advanced machine learning models,
            <br />
            enhance data analysis, and extract actionable insights
            <br /> for real-world applications.
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Gemini;
