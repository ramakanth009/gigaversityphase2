import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";
import financial1 from "../../../Assets/propelld.svg"
import financial2 from "../../../Assets/InCred.svg"
import financial3 from "../../../Assets/liquilogo.svg"
import financial4 from "../../../Assets/creditfai.svg"

const Financial = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h4" color="initial" className={classes.financialhead}>
        our financial partners
      </Typography>
      <Box className={classes.financeguys}>
      <Box className={classes.financeguy1}>
        <img src={financial1} alt="financialpartner" className={classes.financepep} />
        <img src={financial2} alt="financialpartner" className={classes.financepep} />
        <img src={financial3} alt="financialpartner" className={classes.financepep} />
        <img src={financial4} alt="financialpartner" className={classes.financepep} />
      </Box>
      </Box>
    </Box>
  );
};

export default Financial;
