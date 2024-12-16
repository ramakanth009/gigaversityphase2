import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import Geminilogo from "../../../../Assets/Google-Ai-Gemini1.svg";

const Gemini = () => {
  const classes = useStyles();
  return (
    <Box className={classes.geminimain}>
      <Typography variant="h4" color="initial" className={classes.geminihead}>
        Supercharge Your Data Science Journey with AI Premium
      </Typography>
      <Box className={classes.geminicontent}>
        <Box className={classes.aibox1}>
          <img src={Geminilogo} alt="gemini logo" />
          <Typography
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
          </Typography>
        </Box>
        <Box className={classes.aibox2}>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Leverage
            <span className={classes.geminipointsbold}>
              Llama's machine learning
            </span>
            models to build
            <br />
            high-performance data science solutions.
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Use
            <span className={classes.geminipointsbold}>
              Claude's AI capabilities{" "}
            </span>
            for accurate
            <br />
            predictions and optimized data science projects.
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            className={classes.geminipoints}
          >
            Enhance your data science skills with
            <span className={classes.geminipointsbold}> ChatGPT </span>
            for
            <br />
            coding and insightful solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Gemini;
