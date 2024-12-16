import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Digitalanounce from "../../../../Assets/digitalanounce.svg";

const Gemini = () => {
  const classes = useStyles();
  return (
    <Box className={classes.geminimain}>
      <Typography variant="h4" color="initial" className={classes.geminihead}>
        Master the Most In-Demand Marketing Skills
      </Typography>
      <Box className={classes.geminicontent}>
        <Box className={classes.aibox2}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Search Engine Optimization (SEO)
            {/* <span className={classes.geminipointsbold}>
              {" "}
              Gemini premium
            </span>{" "}
            for Generative AI & APIs – Worth $30 */}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Social Media Marketing (SMM)
            <span className={classes.geminipointsbold}>Advanced APIs</span>
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Search Engine Marketing(SEM)
            {/* <span className={classes.geminipointsbold}>Learning Curve</span> */}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Content Strategy
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Email Marketing
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Performance Analytics
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Pay-Per-Click Advertising (PPC)
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Market Research
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Brand Positioning
          </Typography>
        </Box>
        <Box className={classes.aibox1}>
          <img src={Digitalanounce} alt="gemini logo" />
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
