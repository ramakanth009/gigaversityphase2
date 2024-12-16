// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Powerbi from "../../../../Assets/power-bi.svg"
// import Numy from "../../../../Assets/numpy.svg"
// import Midjourney from "../../../../Assets/midjourney.svg"
// import Chatgpt from "../../../../Assets/chatgpt-logo-01-freelogovectors.net_ 1.svg"
// import Matplotlib from "../../../../Assets/Matplotlib-featured-image-studyopedia1.svg"
// import Mysql from "../../../../Assets/mysql.svg"
// import Dalle from "../../../../Assets/OpenAI-Dall-E-2 1.svg"
// import Excel from "../../../../Assets/excel-logo 1.svg"
// import Python from "../../../../Assets/python.svg"
// import scipy from "../../../../Assets/scipy 1.svg"
// import Tableau from "../../../../Assets/Tableau-Logo.svg"

// const Toolscovered = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.toolsmain}>
//       <Typography variant="h4" color="initial" className={classes.toolshead}>
//         Tools Covered
//       </Typography>
//       <Box className={classes.tools}>
//         <Box className={classes.toolbox1}>
//         <img src={Powerbi} alt="Powerbi" />
//           <img src={Numy} alt="Numy" />
//           <img src={Midjourney} alt="Midjourney" />
//           <img src={Chatgpt} alt="Chatgpt" />
//           <img src={Matplotlib} alt="Matplotlib" />
//         </Box>
//         <Box className={classes.toolbox1}>
//           <img src={Mysql} alt="Mysql" />
//           <img src={Dalle} alt="Dalle" />
//           <img src={Excel} alt="Excel" />
//           <img src={Python} alt="Python" />
//           <img src={scipy} alt="scipy" />
//           <img src={Tableau} alt="Tableau" />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Toolscovered;
import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ToolsCoveredMain from "../../../Elements//Toolscoveredmain/toolscoveredmain";

// Dynamic tool configurations
const toolConfigurations = [
  {
    name: "git",
    logoImport: () => import("../../../../Assets/git.svg"),
    category: "Visualization",
  },
  {
    name: "Sql",
    logoImport: () => import("../../../../Assets/Sql_data_base.svg"),
    category: "Data Science",
  },
  {
    name: "java",
    logoImport: () => import("../../../../Assets/java-logo.svg"),
    category: "AI Art",
  },
  {
    name: "spring",
    logoImport: () => import("../../../../Assets/Spring_Framework-Logo.svg"),
    category: "AI",
  },
  {
    name: "agile",
    logoImport: () => import("../../../../Assets/agile.svg"),
    category: "Visualization",
  },
  {
    name: "html&css",
    logoImport: () => import("../../../../Assets/html&css.svg"),
    category: "Database",
  },
  {
    name: "springboot",
    logoImport: () => import("../../../../Assets/springboot.svg"),
    category: "AI Art",
  },
  {
    name: "Amazon_Web",
    logoImport: () => import("../../../../Assets/Amazon_Web.svg"),
    category: "Spreadsheet",
  },
  // {
  //   name: "Python",
  //   logoImport: () => import("../../../../Assets/python.svg"),
  //   category: "Programming",
  // },
  // {
  //   name: "Scipy",
  //   logoImport: () => import("../../../../Assets/scipy 1.svg"),
  //   category: "Data Science",
  // },
  // {
  //   name: "Tableau",
  //   logoImport: () => import("../../../../Assets/Tableau-Logo.svg"),
  //   category: "Visualization",
  // },
];

// Optional: Create styles for the page
const useStyles = makeStyles(() => ({
  // pageContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   // padding: '20px',
  //   // backgroundColor: '#f5f5f5'
  // },
}));

const Toolscovered = () => {
  const classes = useStyles();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const loadTools = async () => {
      const loadedTools = [];

      for (const tool of toolConfigurations) {
        try {
          const importedLogo = await tool.logoImport();
          loadedTools.push({
            name: tool.name,
            logo: importedLogo.default,
            category: tool.category,
          });
        } catch (error) {
          console.error(`Failed to load logo for ${tool.name}:`, error);
        }
      }

      setTools(loadedTools);
    };

    loadTools();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box className={classes.pageContainer}>
        <ToolsCoveredMain tools={tools} />
      </Box>
    </Container>
  );
};

export default Toolscovered;
