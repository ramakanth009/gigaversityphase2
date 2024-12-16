// import React from "react";
// import { makeStyles } from "@mui/styles";
// import { Box, Typography, Button } from "@mui/material";

// const useStyles = makeStyles(() => ({
//   heroContainer: {
//     position: "relative",
//     width: "100%",
//     minHeight: "700px",
//     display: "flex",
//     alignItems: "center",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundImage: ({ backgroundImage }) =>
//       backgroundImage ? `url(${backgroundImage})` : "none",

//     "@media (max-width: 1200px)": {
//       minHeight: "600px",
//     },
//     "@media (max-width: 900px)": {
//       minHeight: "500px",
//     },
//     "@media (max-width: 600px)": {
//       minHeight: "400px",
//     },
//   },
//   heromain: {
//     width: "60%",
//     padding: "60px 0px 20px 100px",

//     "@media (max-width: 1200px)": {
//       width: "70%",
//       padding: "40px 0px 20px 80px",
//     },
//     "@media (max-width: 900px)": {
//       width: "80%",
//       padding: "30px 0px 15px 50px",
//     },
//     "@media (max-width: 600px)": {
//       width: "90%",
//       padding: "20px 15px",
//       textAlign: "center",
//     },
//   },
//   herotext: {
//     fontSize: "2.1rem !important",
//     color: "#fff",
//     fontWeight: "bold !important",
//     paddingBottom: "20px",
//     lineHeight: "50px !important",
//     width: "80% !important",
//     textTransform: "uppercase",

//     "@media (max-width: 1200px)": {
//       fontSize: "1.8rem !important",
//       lineHeight: "40px !important",
//     },
//     "@media (max-width: 900px)": {
//       fontSize: "1.5rem !important",
//       lineHeight: "35px !important",
//       width: "100% !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "1.2rem !important",
//       lineHeight: "30px !important",
//     },
//   },
//   herosub: {
//     fontSize: "1.1rem !important",
//     color: "#fff !important",
//     width: "70% !important",
//     paddingBottom: "40px",

//     "@media (max-width: 1200px)": {
//       fontSize: "1rem !important",
//       width: "80% !important",
//     },
//     "@media (max-width: 900px)": {
//       width: "100% !important",
//       fontSize: "0.9rem !important",
//     },
//     "@media (max-width: 600px)": {
//       fontSize: "0.8rem !important",
//       paddingBottom: "20px",
//     },
//   },
//   highlight: {
//     color: "#81F6FF",
//     display: "block",
//     margin: "10px 0",
//   },
//   buttons: {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "50px",
//     paddingBottom: "30px",

//     "@media (max-width: 900px)": {
//       flexDirection: "column",
//       alignItems: "center",
//       gap: "20px",
//     },
//   },
//   button1: {
//     backgroundColor: "#1E90FF !important",
//     padding: "9px 20px !important",
//     fontSize: "1rem !important",

//     "@media (max-width: 600px)": {
//       padding: "7px 15px !important",
//       fontSize: "0.9rem !important",
//     },
//   },
//   button2: {
//     backgroundColor: "#ffffff !important",
//     padding: "9px 15px !important",
//     fontSize: "1rem !important",
//     color: "#000000 !important",

//     "@media (max-width: 600px)": {
//       padding: "7px 15px !important",
//       fontSize: "0.9rem !important",
//     },
//   },
// }));
// const Heromain = ({
//   title = "",
//   title2 = "",
//   highlightText = "",
//   subtitle = "",
//   backgroundImage = null,
//   applyButtonText = "",
//   demoButtonText = "",
//   onApplyClick = () => {},
//   onDemoClick = () => {},
// }) => {
//   const classes = useStyles({ backgroundImage });

//   return (
//     <Box className={classes.heroContainer}>
//       <Box className={classes.heromain}>
//         <Typography className={classes.herotext}>
//           {title}
//           <span className={classes.highlight}>{highlightText}</span>
//           {/* Shape the Future with Data */}
//           {title2}
//         </Typography>
//         <Typography className={classes.herosub} variant="body2">
//           {subtitle}
//         </Typography>
//         <Box className={classes.buttons}>
//           <Button
//             className={classes.button1}
//             variant="contained"
//             onClick={onApplyClick}
//           >
//             {applyButtonText}
//           </Button>
//           <Button
//             className={classes.button2}
//             variant="contained"
//             onClick={onDemoClick}
//           >
//             {demoButtonText}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Heromain;

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Heromain = ({
  title = "",
  title2 = "",
  highlightText = "",
  subtitle = "",
  backgroundImage = null,
  applyButtonText = "",
  demoButtonText = "",
  onApplyClick = () => {},
  onDemoClick = () => {},
}) => {
  const heroContainerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
  };

  const heroMainStyle = {
    width: "60%",
    padding: "60px 0px 20px 100px",
  };

  const heroTextStyle = {
    fontSize: "2.1rem",
    color: "#fff",
    fontWeight: "bold",
    paddingBottom: "20px",
    lineHeight: "50px",
    width: "80%",
    textTransform: "uppercase",
  };

  const heroSubStyle = {
    fontSize: "1.1rem",
    color: "#fff",
    width: "70%",
    paddingBottom: "40px",
  };

  const highlightStyle = {
    color: "#81F6FF",
    // display: "block",
    margin: "10px 0",
  };

  const buttonsStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "50px",
    paddingBottom: "30px",
  };

  const button1Style = {
    backgroundColor: "#1E90FF",
    padding: "9px 20px",
    fontSize: "1rem",
  };

  const button2Style = {
    backgroundColor: "#ffffff",
    padding: "9px 15px",
    fontSize: "1rem",
    color: "#000000",
  };

  return (
    <Box style={heroContainerStyle}>
      <Box style={heroMainStyle}>
        <Typography style={heroTextStyle}>
          {title}<span style={highlightStyle}>{highlightText}</span>
          {title2}
        </Typography>
        <Typography style={heroSubStyle} variant="body2">
          {subtitle}
        </Typography>
        <Box style={buttonsStyle}>
          <Button
            style={button1Style}
            variant="contained"
            onClick={onApplyClick}
          >
            {applyButtonText}
          </Button>
          <Button
            style={button2Style}
            variant="contained"
            onClick={onDemoClick}
          >
            {demoButtonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Heromain;
