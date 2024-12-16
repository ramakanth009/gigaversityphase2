import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Import the logos directly
import AccentureLogo from "../../../Assets/Accenture.png";
import Adobelogo from "../../../Assets/Adobe_Corporate_logo.png";
import Adplogo from "../../../Assets/adp.png";
import Amazonlogo from "../../../Assets/Amazon-Logo-200.png";
import Bharathpelogo from "../../../Assets/BharatPe-Money.png";
import Capgeminilogo from "../../../Assets/capgemini-log.png";
import credlogo from "../../../Assets/Cred.png";
import Delllogo from "../../../Assets/Dell.png";
import Deloittelogo from "../../../Assets/deloitte.png";
import Flipkartlogo from "../../../Assets/Flipkart-Logo.png";
import Infosyslogo from "../../../Assets/Infosys_logo.png";
import Musigmalogo from "../../../Assets/Mu-Sigma.png";
import Phonepelogo from "../../../Assets/PhonePe_Log.png";
import Pharmeasylogo from "../../../Assets/pharmeasy.png";
import Tcslogo from "../../../Assets/tcs.png";
import Techmahindralogo from "../../../Assets/Tech_Mahindra.png";
import Wiprologo from "../../../Assets/Wipro.png";
import Zohologo from "../../../Assets/Zoho-logo.png";

// Define the type for the component props
// type HiringPartnersProps = {
//   customLogos?: string[];
//   title?: string;
//   backgroundColor?: string;
//   logoHeight?: number;
// };

// Default logos array
const defaultLogos = [
  AccentureLogo,
  Adobelogo,
  Adplogo,
  Amazonlogo,
  Bharathpelogo,
  Capgeminilogo,
  credlogo,
  Delllogo,
  Deloittelogo,
  Flipkartlogo,
  Infosyslogo,
  Musigmalogo,
  Phonepelogo,
  Pharmeasylogo,
  Tcslogo,
  Techmahindralogo,
  Wiprologo,
  Zohologo,
];

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    overflow: "hidden",
    background: "#D0E8FF",
    padding: "20px 0",
    position: "relative",
    marginBottom: "20px !important",
  },
  title: {
    textAlign: "center !important",
    textTransform: "uppercase !important",
    fontWeight: "bold !important",
    marginBottom: "15px !important",
  },
  scrollContainer: {
    display: "inline-flex",
    width: "457%",
    marginBottom: "20px",
  },
  logoContainer: {
    width: "auto",
    height: "80px",
    maxWidth: "150px",
    margin: "0 20px",
    objectFit: "contain",
    flexShrink: 0,
  },
  '@keyframes infinite-scroll-left': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
  '@keyframes infinite-scroll-right': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(50%)',
    },
  },
  scrollLeft: {
    animation: '$infinite-scroll-left 30s linear infinite',
  },
  scrollRight: {
    animation: '$infinite-scroll-right 30s linear infinite',
    direction: 'rtl',
  },
}));

const Hiringpartners = ({
  customLogos,
  title = "Our hiring partners",
  backgroundColor = "#D0E8FF",
  logoHeight = 80
}) => {
  const classes = useStyles();

  // Use custom logos if provided, otherwise use default logos
  const logos = customLogos || defaultLogos;

  // Duplicate logos to create continuous scrolling effect
  const scrollLogos = logos.concat(logos).concat(logos);

  return (
    <Box>
      <Typography 
        variant="h4" 
        color="initial" 
        className={classes.title}
      >
        {title}
      </Typography>
      <Box 
        className={classes.root} 
        sx={{ background: backgroundColor }}
      >
        {/* First Layer - Scrolling Left */}
        <Box 
          className={`${classes.scrollContainer} ${classes.scrollLeft}`}
        >
          {scrollLogos.map((logo, index) => (
            <Box
              key={`logo-left-${index}`}
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              className={classes.logoContainer}
              sx={{ 
                height: `${logoHeight}px !important`,
                maxWidth: `${logoHeight * 2}px !important` 
              }}
            />
          ))}
        </Box>

        {/* Second Layer - Scrolling Right */}
        <Box 
          className={`${classes.scrollContainer} ${classes.scrollRight}`}
        >
          {scrollLogos.map((logo, index) => (
            <Box
              key={`logo-right-${index}`}
              component="img"
              src={logo}
              alt={`Logo ${index + 1}`}
              className={classes.logoContainer}
              sx={{ 
                height: `${logoHeight}px !important`,
                maxWidth: `${logoHeight * 2}px !important` 
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hiringpartners;