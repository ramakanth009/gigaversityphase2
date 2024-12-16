import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  curriculammain: {},
  curriculamhead: {
    textAlign: "center",
    fontWeight: "bold !important",
  },
  curriculamcontent: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #E4F2FF 46%, #93C8FC 100%)",
      display:"flex",
  },
  activeHeading:{
    backgroundColor:""
  }
}));


// import React, { useState } from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";

// const Curriculam = () => {
//   const classes = useStyles();
//   const [selectedHeading, setSelectedHeading] = useState(
//     "Core and Advanced Python Programming"
//   );

//   const handleHeadingClick = (heading) => {
//     setSelectedHeading(heading);
//   };

//   return (
//     <Box className={classes.curriculammain}>
//       <Typography variant="h4" className={classes.curriculamhead}>
//         Cutting - Edge Curriculum Crafted for Excellence
//       </Typography>
//       <Box className={classes.curriculamcontent}>
//         <Box className={classes.curriculamcontentBody}>
         
//         </Box>
//         <Box className={classes.curriculamheading}>
//           <Typography
//             variant="h5"
//             color="initial"
//             onClick={() =>
//               handleHeadingClick("Core and Advanced Python Programming")
//             }
//           >
//             Core and Advanced Python Programming
//           </Typography>
//           <Typography
//             variant="h5"
//             color="initial"
//             onClick={() => handleHeadingClick("SQL")}
//           >
//             SQL
//           </Typography>
//           <Typography
//             variant="h5"
//             color="initial"
//             onClick={() =>
//               handleHeadingClick(
//                 "Foundations of Mathematics in Data Science and EDA"
//               )
//             }
//           >
//             Foundations of Mathematics in Data Science and EDA
//           </Typography>
//           <Typography
//             variant="h5"
//             color="initial"
//             onClick={() =>
//               handleHeadingClick("Comprehensive Machine Learning Series")
//             }
//           >
//             Comprehensive Machine Learning Series
//           </Typography>
//           <Typography
//             variant="h5"
//             color="initial"
//             onClick={() =>
//               handleHeadingClick("Comprehensive Deep Learning and NLP")
//             }
//           >
//             
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Curriculam;
