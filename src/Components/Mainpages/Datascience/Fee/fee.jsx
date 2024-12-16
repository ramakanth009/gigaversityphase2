// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Feebackground from "../../../../Assets/feebackground.png";
// import Fee1 from "../../../../Assets/fee1.svg";
// import Fee2 from "../../../../Assets/fee2.svg";
// import Fee3 from "../../../../Assets/fee3.svg";
// const Fee = () => {
//   const classes = useStyles();
//   return (
//     <Box
//       className={classes.feemain}
//       sx={{
//         backgroundImage: `url(${Feebackground})`,
//         backgroundPosition: "center",
//         backgroundRepeat: "norepeat",
//       }}
//     >
//       <Typography variant="h4" color="initial" className={classes.feehead}>
//         Fee structure for Data Science program
//       </Typography>
//       <Box className={classes.feeboxes}>
//         <Box className={classes.feebox}>
//           <Box className={classes.feeimg}>
//             <img src={Fee1} alt="fee icon 1" />
//           </Box>
//           <Typography
//             variant="h6"
//             color="initial"
//             className={classes.feesubhead}
//           >
//             Course Fee
//           </Typography>
//           <Typography
//             variant="body1"
//             color="initial"
//             className={classes.feesubcontext}
//           >
//             Starting from
//             <br />
//             <span className={classes.feesubbold}>INR 7,084 </span> / month <br />
//             <span className={classes.feesubbold}>Flexible EMI </span> options available for up to 24 months.
//           </Typography>
//         </Box>
//         <Box className={classes.feebox}>
//           <Box className={classes.feeimg}>
//             <img src={Fee2} alt="fee icon 2" />
//           </Box>
//           <Typography
//             variant="h6"
//             color="initial"
//             className={classes.feesubhead}
//           >
//             Scholarship Opportunity
//           </Typography>
//           <Typography
//             variant="body1"
//             color="initial"
//             className={classes.feesubcontext}
//           >
//             If you believe you qualify for a more affordable price, <br />
//             <span className={classes.feesubbold}>apply for a scholarship</span>
//             <br /> to potentially receive financial assistance based on merit
//             and need.
//           </Typography>
//         </Box>
//         <Box className={classes.feebox}>
//           <Box className={classes.feeimg}>
//             <img src={Fee3} alt="fee icon 3" />
//           </Box>
//           <Typography
//             variant="h6"
//             color="initial"
//             className={classes.feesubhead}
//           >
//             Support for Physically Challenged Individuals
//           </Typography>
//           <Typography
//             variant="body1"
//             color="initial"
//             className={classes.feesubcontext}
//           >
//             We are proud to offer <br /> <span className={classes.feesubbold}> free seats </span> for
//             physically challenged individuals, subject to eligibility and terms
//             and conditions.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Fee;
import React from "react";
import Feemain from "../../../Elements/Feemain/feemain";
import Feebackground from "../../../../Assets/feebackground.png";

const fee = () => {
  return <Feemain backgroundImage={Feebackground} />;
};

export default fee;
