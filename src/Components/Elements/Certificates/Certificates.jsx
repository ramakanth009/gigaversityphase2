// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// // import Backgroundpattern from "../../../../Assets/backgroundpattern.svg";
// import The_certificate from "../../../../Assets/rb_2148400873.png";
// import Hat from "../../../../Assets/hat.svg";

// const Certificates = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Typography
//         variant="h4"
//         color="initial"
//         className={classes.certificates_head}
//       >
//         Be in the spotlight by getting Certified
//       </Typography>
//       <Box className={classes.certificates_main}>
//         <Box className={classes.certificates_sub}>
//           <Box>
//             <img
//               src={The_certificate}
//               alt="the certificate"
//               className={classes.certificate}
//             />
//           </Box>

//           <Box className={classes.certi_box}>
//             <Typography variant="h4" color="initial" className={classes.certi_title}>
//               Your passport to career growth
//             </Typography>
//             <Box className={classes.certi_point}>
//               <img src={Hat} alt="scholar_hat" className={classes.hat} />
//               <Typography
//                 variant="h6"
//                 color="initial"
//                 className={classes.certi_text}
//               >
//                 Validate Your Skills with Industry-Endorsed Credentials
//               </Typography>
//             </Box>
//             <Box className={classes.certi_point}>
//               <img src={Hat} alt="scholar_hat" className={classes.hat} />
//               <Typography
//                 variant="h6"
//                 color="initial"
//                 className={classes.certi_text}
//               >
//                 Gain a Competitive Edge with Verified Expertise
//               </Typography>
//             </Box>
//             <Box className={classes.certi_point}>
//               <img src={Hat} alt="scholar_hat" className={classes.hat} />
//               <Typography
//                 variant="h6"
//                 color="initial"
//                 className={classes.certi_text}
//               >
//                 Open Doors to Global Opportunities
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Certificates;

import React from "react";
import { Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Import your images
import The_certificate from "../../../Assets/rb_2148400873.png";
import Hat from "../../../Assets/hat.svg";

// Certificate points data - make it dynamic and easily updatable
const CERTIFICATE_POINTS = [
  "Validate Your Skills with Industry-Endorsed Credentials",
  "Gain a Competitive Edge with Verified Expertise",
  "Open Doors to Global Opportunities",
];

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 !important",
    margin: "0 !important",
    width: "100% !important",
  },
  certificatesHead: {
    textAlign: "center !important",
    fontWeight: "bold !important",
    textTransform: "uppercase !important",
    marginBottom: "20px !important",
    fontSize: "2rem !important",
  },
  certificatesMain: {
    background:
      "linear-gradient(180deg, #D0E8FF 0%, #8AC7FF 15%, #FFFFFF 35.5%, #FFFFFF 50%, #BCDEFF 67.5%, #D0E8FF 100%)",
    padding: "20px !important",
    margin: "40px auto !important",
    borderRadius: "60px !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    maxWidth: "1200px !important",
    width: "90% !important",
  },
  certificatesSub: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    gap: "30px !important",
    flexWrap: "wrap !important",
    width: "100% !important",
  },
  certificateContainer: {
    maxWidth: "100% !important",
    height: "auto !important",
    objectFit: "contain !important",
    width: "100% !important",
    maxHeight: "500px !important",
  },
  certificateImageBox: {
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    width: "100% !important",
    maxWidth: "500px !important",
  },
  certi_box: {
    width: "100% !important",
    maxWidth: "500px !important",
    padding: "10px !important",
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
  },
  certi_title: {
    textAlign: "center !important",
    fontWeight: "bold !important",
    marginBottom: "40px !important",
    fontSize: "1.8rem !important",
    width: "100% !important",
  },
  certi_point: {
    display: "flex !important",
    alignItems: "center !important",
    gap: "20px !important",
    marginBottom: "20px !important",
    width: "100% !important",
  },
  hat: {
    width: "30px !important",
    height: "30px !important",
    flexShrink: "0 !important",
  },
  certi_text: {
    fontWeight: "bold !important",
    letterSpacing: "2.5px !important",
    fontSize: "1rem !important",
    flexGrow: "1 !important",
  },
  "@media (max-width: 1024px)": {
    certificatesMain: {
      margin: "20px auto !important",
      width: "95% !important",
    },
    certificatesSub: {
      flexDirection: "column !important",
      alignItems: "center !important",
    },
    certificateContainer: {
      maxHeight: "300px !important",
    },
    certi_title: {
      fontSize: "1.5rem !important",
    },
  },
  "@media (max-width: 600px)": {
    certificatesHead: {
      fontSize: "1.5rem !important",
    },
    certi_text: {
      fontSize: "0.9rem !important",
      letterSpacing: "1.5px !important",
    },
    certi_point: {
      flexDirection: "column !important",
      textAlign: "center !important",
      gap: "10px !important",
    },
  },
  "@media (max-width: 1200px)": {
    "&:MuiContainer-root": {
      textAlign: "center", // Ensures content centers
    },
  },
  "@media (min-width: 1200px)": {
    maxWidth: "auto !important", // Dynamically adjust width
  },
}));

const Certificates = () => {
  const classes = useStyles();

  return (
    <Box className={classes.certiroot} disableGutters>
      <Typography
        variant="h4"
        color="initial"
        className={classes.certificatesHead}
      >
        Be in the spotlight by getting Certified
      </Typography>

      <Box className={classes.certificatesMain}>
        <Box className={classes.certificatesSub}>
          <Box className={classes.certificateImageBox}>
            <img
              src={The_certificate}
              alt="the certificate"
              className={classes.certificateContainer}
            />
          </Box>

          <Box className={classes.certi_box}>
            <Typography
              variant="h4"
              color="initial"
              className={classes.certi_title}
            >
              Your passport to career growth
            </Typography>

            {CERTIFICATE_POINTS.map((point, index) => (
              <Box key={index} className={classes.certi_point}>
                <img src={Hat} alt="scholar_hat" className={classes.hat} />
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.certi_text}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Certificates;
