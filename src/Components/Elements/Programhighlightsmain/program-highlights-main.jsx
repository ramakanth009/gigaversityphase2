// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   highlightmain: {
//     background:
//       "radial-gradient(50% 50% at 50% 50%, #E4F2FF 31%, #D0E8FF 100%)",
//     margin: "20px 20px 20px 10px",
//     borderRadius: "50px",
//     padding: "20px",
//     display: "flex",
//     // flexWrap: "wrap",
//     flexDirection:"row",
//     gap: "20px",
//     "@media (max-width: 1024px)": {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
//   highlightone: {
//     height: "auto",
//     width: "30%",
//     minWidth: "250px",
//     backgroundColor: "#1e90ff !important",
//     borderRadius: "20px",
//     "@media (max-width: 1024px)": {
//       width: "90%",
//     },
//   },
//   highlighttwo: {
//     width: "35%",
//     minWidth: "250px",
//     "@media (max-width: 1024px)": {
//       width: "90%",
//     },
//     marginLeft:"20px"
//   },
//   highlighttwohead: {
//     color: "rgba(0, 122, 241, 1) !important",
//     fontWeight: "bold !important",
//     fontSize: "1.8rem !important",
//     textTransform: "uppercase",
//     width: "100%",
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
//   twoheaddetaillist: {
//     fontWeight: 400,
//     fontSize: "1.3rem",
//     display: "flex",
//     flexDirection: "column",
//     gap: "48px",
//     padding: 0,
//     margin: 0,
//   },
//   highlightthree: {
//     width: "35%",
//     minWidth: "250px",
//     backgroundColor: "#ffffff",
//     borderRadius: "20px",
//     "@media (max-width: 1024px)": {
//       width: "90%",
//     },
//   },
//   threehead: {
//     boxSizing: "none !important",
//     color: "#fff !important",
//     backgroundColor: "#1e90ff",
//     padding: "8px",
//     textAlign: "center",
//     fontSize: "1.4rem !important",
//     borderRadius: "10px 10px 10px 10px",
//     margin: "10px 0 !important",
//     overflow: "visible !important",
//     width: "98%",
//     position: "relative",
//     left: "50%",
//     transform: "translateX(-50%)",
//     textTransform: "uppercase",
//     fontWeight: "bold !important",
//   },
//   threeheaddetaillist: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//   },
//   thicon: {
//     height: "40px",
//     padding: "8px 10px !important",
//   },
//   thlist: {
//     display: "flex",
//     gap: "20px",
//     alignItems: "center",
//     fontSize: "1.3rem",
//     margin: "10px 0",
//   },
//   programbold: {
//     fontWeight: "bold",
//   },
// }));

// const Programhighlightsmain = ({
//   mainHeadline,
//   mainDetails,
//   programHighlights,
//   iconComponents,
// }) => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.highlightmain}>
//       <Box className={classes.highlightone}></Box>
//       <Box className={classes.highlighttwo}>
//         <Typography
//           variant="h6"
//           color="initial"
//           className={classes.highlighttwohead}
//         >
//           {mainHeadline}
//         </Typography>

//         <Box className={classes.twoheaddetail}>
//           <ul className={classes.twoheaddetaillist}>
//             {mainDetails.map((detail, index) => (
//               <li key={index}>
//                 {detail.map((part, partIndex) =>
//                   part.bold ? (
//                     <span key={partIndex} className={classes.programbold}>
//                       {part.text}
//                     </span>
//                   ) : (
//                     part.text
//                   )
//                 )}
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//       <Box className={classes.highlightthree}>
//         <Typography variant="h6" color="initial" className={classes.threehead}>
//           Highlights of the Program
//         </Typography>
//         <Box className={classes.threeheaddetail}>
//           <ul className={classes.threeheaddetaillist}>
//             {programHighlights.map((highlight, index) => (
//               <li key={index} className={classes.thlist}>
//                 <img
//                   src={iconComponents[highlight.icon]}
//                   alt={`icon${index + 1}`}
//                   className={classes.thicon}
//                 />
//                 <p>{highlight.text}</p>
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Programhighlightsmain;

import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  highlightmain: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #E4F2FF 31%, #D0E8FF 100%)",
    margin: "20px 20px 20px 10px",
    borderRadius: "50px",
    padding: "20px",
    display: "flex",
    flexDirection:"row",
    gap: "20px",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  highlightone: {
    height: "auto",
    width: "30%",
    minWidth: "250px",
    // backgroundColor: "#1e90ff !important",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
  },
  highlightoneImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "20px",
  },
  highlighttwo: {
    width: "35%",
    minWidth: "250px",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
    marginLeft:"20px"
  },
  highlighttwohead: {
    color: "rgba(0, 122, 241, 1) !important",
    fontWeight: "bold !important",
    fontSize: "1.8rem !important",
    textTransform: "uppercase",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  twoheaddetaillist: {
    fontWeight: 400,
    fontSize: "1.3rem",
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    padding: 0,
    margin: 0,
  },
  highlightthree: {
    width: "35%",
    minWidth: "250px",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
  },
  threehead: {
    boxSizing: "none !important",
    color: "#fff !important",
    backgroundColor: "#1e90ff",
    padding: "8px",
    textAlign: "center",
    fontSize: "1.4rem !important",
    borderRadius: "10px 10px 10px 10px",
    margin: "10px 0 !important",
    overflow: "visible !important",
    width: "98%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    textTransform: "uppercase",
    fontWeight: "bold !important",
  },
  threeheaddetaillist: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  thicon: {
    height: "40px",
    padding: "8px 10px !important",
  },
  thlist: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "1.3rem",
    margin: "10px 0",
  },
  programbold: {
    fontWeight: "bold",
  },
}));

const Programhighlightsmain = ({
  mainHeadline,
  mainDetails,
  programHighlights,
  iconComponents,
  heroImage,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.highlightmain}>
      <Box className={classes.highlightone}>
        {heroImage && (
          <img 
            src={heroImage} 
            alt="Program Hero" 
            className={classes.highlightoneImage} 
          />
        )}
      </Box>
      <Box className={classes.highlighttwo}>
        <Typography
          variant="h6"
          color="initial"
          className={classes.highlighttwohead}
        >
          {mainHeadline}
        </Typography>

        <Box className={classes.twoheaddetail}>
          <ul className={classes.twoheaddetaillist}>
            {mainDetails.map((detail, index) => (
              <li key={index}>
                {detail.map((part, partIndex) =>
                  part.bold ? (
                    <span key={partIndex} className={classes.programbold}>
                      {part.text}
                    </span>
                  ) : (
                    part.text
                  )
                )}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box className={classes.highlightthree}>
        <Typography variant="h6" color="initial" className={classes.threehead}>
          Highlights of the Program
        </Typography>
        <Box className={classes.threeheaddetail}>
          <ul className={classes.threeheaddetaillist}>
            {programHighlights.map((highlight, index) => (
              <li key={index} className={classes.thlist}>
                <img
                  src={iconComponents[highlight.icon]}
                  alt={`icon${index + 1}`}
                  className={classes.thicon}
                />
                <p>{highlight.text}</p>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Programhighlightsmain;