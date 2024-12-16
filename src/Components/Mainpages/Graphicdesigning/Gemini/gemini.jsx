import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Graphicdesign from "../../../../Assets/graphicdesigness.svg";

const Gemini = () => {
  const classes = useStyles();
  return (
    <Box className={classes.geminimain}>
      <Typography variant="h4" color="initial" className={classes.geminihead}>
        Develop Expertise in Essential Graphic Design Skills
      </Typography>
      <Box className={classes.geminicontent}>
        <Box className={classes.aibox2}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Visual Communication Design
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
            Typography and Layout
            {/* <span className={classes.geminipointsbold}>Advanced APIs</span> */}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Branding and Identity Design
            {/* <span className={classes.geminipointsbold}>Learning Curve</span> */}
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            User Interface (UI) Design
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Motion Graphics and Animation
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Digital Illustration
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Print and Publication Design
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Color Theory and Application
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Design Thinking Process
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Photo Editing and Retouching
          </Typography>
        </Box>
        <Box className={classes.aibox1}>
          <img src={Graphicdesign} alt="gemini logo" />
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
