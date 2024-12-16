import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";

const useStyles = makeStyles(() => ({
  wtbuildhead: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold !important",
    // fontSize: "1.5rem !important",
    padding: "20px 10px",
  },
  wtbuildsub: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0 10px",
  },
  wtbuildbox: {
    background: "rgba(171, 213, 255, 0.80)",
    display: "flex",
    flexDirection: "column", // Default to column for smaller screens
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    borderRadius: "55px",
    margin: "10px",
    padding: "20px",
    "@media (min-width: 600px)": {
      flexDirection: "row",
      gap: "50px",
      margin: "20px 50px",
      padding: "20px 40px",
    },
  },
  wtbuildimg: {
    width: "20%",
    maxWidth: "150px", // Smaller default size
    height: "auto",
    "@media (min-width: 600px)": {
      maxWidth: "200px",
    },
  },
  wtbuildcontent: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "center",
    "@media (min-width: 600px)": {
      textAlign: "left",
    },
  },
  wtbuildcthead: {
    fontWeight: "bold !important",
    textTransform: "uppercase",
    letterSpacing: "1px !important",
    fontSize: "1.2rem !important",
    textAlign: "center",
    "@media (min-width: 600px)": {
      textAlign: "left",
    },
  },
  wtbuildctdata: {
    fontWeight: "600 !important",
    textTransform: "uppercase",
    letterSpacing: "1px !important",
    fontSize: "0.8rem !important",
    textAlign: "center",
    "@media (min-width: 600px)": {
      textAlign: "left",
      fontSize: "0.9rem !important",
    },
  },
}));

const Whatyoubuildmain = ({
  items = [],
  heading = "What you'll build along the way",
}) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" color="initial" className={classes.wtbuildhead}>
        {heading}
      </Typography>
      <Box className={classes.wtbuildsub}>
        {items.map((item, index) => (
          <Box key={index} className={classes.wtbuildbox}>
            <img
              src={item.image}
              alt={item.title}
              className={classes.wtbuildimg}
            />
            <Box className={classes.wtbuildcontent}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.wtbuildcthead}
              >
                {item.title}
              </Typography>
              {item.details.map((detail, detailIndex) => (
                <Typography
                  key={detailIndex}
                  variant="body1"
                  color="initial"
                  className={classes.wtbuildctdata}
                >
                  {detail}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Whatyoubuildmain;
