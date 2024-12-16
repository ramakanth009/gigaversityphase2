import React from "react";
import { useStyles } from "./styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const classes = useStyles();

  return (
    <div className={classes.faqmain}>
      <Accordion className={classes.faqbox}>
        <AccordionSummary
          expandIcon={<ExpandMore className={classes.arrow} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={classes.question}
        >
          <Typography>FAQ 1</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.answer}>
          This is the answer to FAQ 1.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore className={classes.arrow} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className={classes.question}
        >
          <Typography>FAQ 2</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.answer}>
          This is the answer to FAQ 2.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore className={classes.arrow} />}
          aria-controls="panel3-content"
          id="panel3-header"
          className={classes.question}
        >
          <Typography>FAQ 3</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.answer}>
          This is the answer to FAQ 3.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
