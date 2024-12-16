// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// // Styles using makeStyles
// const useStyles = makeStyles(() => ({
//   toolshead: {
//     fontWeight: "bold !important",
//     backgroundColor: "#D0E8FF !important",
//     borderRadius: "0px 0px 50px 50px",
//     textAlign: "center",
//     margin: "10px 350px !important"
//     // marginBottom:"20px !important",

//   },
//   tools: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "30px",
//     marginBottom: "20px"
//   },
//   toolbox1: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "20px"
//   },
//   logoImage: {
//     maxWidth: "150px",
//     maxHeight: "150px"
//   }
// }));

// const Toolscoveredmain = ({ tools }) => {
//   const classes = useStyles();

//   // Split tools into two rows
//   const firstRow = tools.slice(0, 5);
//   const secondRow = tools.slice(5);

//   return (
//     <Box>
//       <Typography variant="h4" color="initial" className={classes.toolshead}>
//         Tools Covered
//       </Typography>
//       <Box className={classes.tools}>
//         <Box className={classes.toolbox1}>
//           {firstRow.map((tool) => (
//             <img
//               key={tool.name}
//               src={tool.logo}
//               alt={tool.name}
//               className={classes.logoImage}
//             />
//           ))}
//         </Box>
//         <Box className={classes.toolbox1}>
//           {secondRow.map((tool) => (
//             <img
//               key={tool.name}
//               src={tool.logo}
//               alt={tool.name}
//               className={classes.logoImage}
//             />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Toolscoveredmain;


//!if needed use this
// const Toolscoveredmain = ({ tools }) => {
//     const classes = useStyles();
  
//     // Dynamically adjust rows based on screen width
//     const calculateRows = () => {
//       if (window.innerWidth <= 600) {
//         // For very small screens, show all tools in one column
//         return [tools];
//       }
//       // For larger screens, split into two rows
//       const middleIndex = Math.ceil(tools.length / 2);
//       return [
//         tools.slice(0, middleIndex),
//         tools.slice(middleIndex)
//       ];
//     };
  
//     const [rows, setRows] = React.useState(calculateRows());
  
//     // Add resize listener to adjust layout dynamically
//     React.useEffect(() => {
//       const handleResize = () => {
//         setRows(calculateRows());
//       };
  
//       // Add event listener
//       window.addEventListener('resize', handleResize);
  
//       // Clean up event listener
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, [tools]);
  
//     return (
//       <Box>
//         <Typography variant="h4" color="initial" className={classes.toolshead}>
//           Tools Covered
//         </Typography>
//         <Box className={classes.tools}>
//           {rows.map((row, rowIndex) => (
//             <Box key={rowIndex} className={classes.toolbox1}>
//               {row.map((tool) => (
//                 <img 
//                   key={tool.name} 
//                   src={tool.logo} 
//                   alt={tool.name} 
//                   className={classes.logoImage}
//                 />
//               ))}
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     );
//   };

//!ends here 
  
import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Styles using makeStyles
const useStyles = makeStyles(() => ({
  toolshead: {
    fontWeight: "bold !important",
    backgroundColor: "#D0E8FF !important",
    borderRadius: "0px 0px 50px 50px",
    textAlign: "center",
    margin: "10px 350px !important",
    // Responsive adjustments for margin
    "@media (max-width: 1200px)": {
      margin: "10px 250px !important",
    },
    "@media (max-width: 900px)": {
      margin: "10px 150px !important",
    },
    "@media (max-width: 600px)": {
      margin: "10px 20px !important",
    },
  },
  tools: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    marginBottom: "20px",
    padding: "0 20px", // Add padding for smaller screens
  },
  toolbox1: {
    display: "flex",
    flexWrap: "wrap", // Allow wrapping on smaller screens
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    "@media (max-width: 600px)": {
      gap: "10px", // Reduce gap on very small screens
    },
  },
  logoImage: {
    maxWidth: "170px",
    maxHeight: "150px",
    "@media (max-width: 600px)": {
      maxWidth: "100px",
      maxHeight: "100px", // Reduce image size on small screens
    },
    "@media (max-width: 400px)": {
      maxWidth: "80px",
      maxHeight: "80px", // Further reduce on very small screens
    },
  },
}));

const Toolscoveredmain = ({ tools }) => {
  const classes = useStyles();

  // Split tools into two rows
  const firstRow = tools.slice(0, 5);
  const secondRow = tools.slice(5);

  return (
    <Box>
      <Typography variant="h4" color="initial" className={classes.toolshead}>
        Tools Covered
      </Typography>
      <Box className={classes.tools}>
        <Box className={classes.toolbox1}>
          {firstRow.map((tool) => (
            <img
              key={tool.name}
              src={tool.logo}
              alt={tool.name}
              className={classes.logoImage}
            />
          ))}
        </Box>
        <Box className={classes.toolbox1}>
          {secondRow.map((tool) => (
            <img
              key={tool.name}
              src={tool.logo}
              alt={tool.name}
              className={classes.logoImage}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Toolscoveredmain;
