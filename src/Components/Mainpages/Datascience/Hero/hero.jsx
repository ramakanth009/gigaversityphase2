// // import React from "react";
// // // import Dshero from "../../../../Assets/ds-hero.jpg";
// // import { useStyles } from "./styles";
// // import { Box, Typography, Button } from "@mui/material";

// // const Datascience = () => {
// //   const classes = useStyles();
// //   // const capitalizedText = capitalizeFirstLetterOfEachWord(text);
// //   return (
// //     <Box className={classes.heroimage}>
// //       {/* <img src={Dshero} alt="Datascience hero" className={classes.heroimage}/> */}
// //       <Box className={classes.heromain}>
// //         <Typography className={classes.herotext}>
// //           Gigaversity
// //           <span className={classes.highlight}>
// //             Data Science Program Uncover Patterns.
// //           </span>
// //           Drive Insights. Shape the Future with Data
// //         </Typography>
// //         <Typography className={classes.herosub} variant="body2" color="initial">
// //           Data science powers 80% of the world's future careers, with demand
// //           growing across industries from healthcare to tech—prepare for a field
// //           where your insights will drive global change.
// //         </Typography>
// //         <Box className={classes.buttons}>
// //           <Button className={classes.button1} variant="contained">
// //             Apply Now
// //           </Button>
// //           <Button className={classes.button2} variant="contained">
// //             Book A Demo
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// export default Datascience;
// import React from 'react'
// import Heromain from "../../../Elements//Heromain/heromain";
// import heroImage from "../../../../Assets/ds-hero.jpg";

// const Hero = () => {
//   return (
//     <Heromain
//       backgroundImage={heroImage}
//       title="Custom Title"
//       highlightText="Custom Highlight Text"
//       title2 = "hello"
//       subtitle="Custom subtitle text"
//       applyButtonText="Custom Apply"
//       demoButtonText="Custom Demo"
//       onApplyClick={() => console.log("Apply clicked")}
//       onDemoClick={() => console.log("Demo clicked")}
//     />
//   );
// }
// export default Hero;
import React from "react";
import Heromain from "../../../Elements//Heromain/heromain";
import heroImage from "../../../../Assets/ds-hero.jpg";

const Hero = () => {
  return (
    <Heromain
      backgroundImage={heroImage}
      title="Gigaversity "
      highlightText="Data Science Program Uncover Patterns."
      title2="Drive Insights. Shape the Future with Data"
      subtitle="Data science powers 80% of the world's future careers, with demand growing across industries from healthcare to tech—prepare for a field where your insights will drive global change."
      applyButtonText="Apply Now"
      demoButtonText="Book A Demo"
      onApplyClick={() => console.log("Apply clicked")}
      onDemoClick={() => console.log("Demo clicked")}
    />
  );
};

export default Hero;
