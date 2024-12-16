// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";

// const Curriculam = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.curriculammain}>
//       <Typography variant="h4" className={classes.curriculamhead}>
//         Cutting - Edge Curriculum Crafted for Excellence
//       </Typography>
//       <Box className={classes.curriculamcontent}>
//         <Box>
//             <Box>content1</Box>
//             <Box>content2</Box>
//             <Box>content3</Box>
//             <Box>content4</Box>
//             <Box>content5</Box>
//         </Box>
//         <Box className={classes.curriculamheading}>
//           <Typography variant="h5" color="initial">
//             Core and Advanced Python Programming
//           </Typography>
//           <Typography variant="h5" color="initial">
//             SQL
//           </Typography>
//           <Typography variant="h5" color="initial">
//             Foundations of Mathematics in Data Science and EDA
//           </Typography>
//           <Typography variant="h5" color="initial">
//             Comprehensive Machine Learning Series
//           </Typography>
//           <Typography variant="h5" color="initial">
//             Comprehensive Deep Learning and NLP
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Curriculam;

import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@mui/material";

const Curriculam = () => {
  const classes = useStyles();
  const [selectedHeading, setSelectedHeading] = useState(
    "Core and Advanced Python Programming"
  );

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  return (
    <Box className={classes.curriculammain}>
      <Typography variant="h4" className={classes.curriculamhead}>
        Cutting - Edge Curriculum Crafted for Excellence
      </Typography>
      <Box className={classes.curriculamcontent}>
        <Box className={classes.curriculamcontentBody}>
          {selectedHeading === "Core and Advanced Python Programming" && (
            <div>
              <li>Basics of Python</li>
              <li>Control Flow and Functions</li>
              <li>Comprehensive Data Structures</li>
              <li>Exception handling and Module management</li>
              <li>File handling and Iteration techniques</li>
              <li>Oops Concepts</li>
              <li>NumPy and pandas</li>
              <li>Matplotlib for visualisations</li>
              <li>Intro to Frameworks</li>
            </div>
          )}
          {selectedHeading === "SQL" && (
            <div>
              <li>Introduction to Databases and Basic SQL Operations</li>
              <li>Data Aggregation, Manipulation, and Joins</li>
              <li>Advanced SQL for Data Analysis</li>
              <li>Data Preparation, Transformation, and Performance Optimization</li>
              <li>Integrating SQL with Data Science Tools and Real-world Projects</li>
            </div>
          )}
          {selectedHeading ===
            "Foundations of Mathematics in Data Science and EDA" && (
            <div>
              <li>Foundations of Mathematics in Data Science</li>              
              <li>Advanced Mathematics for Data Science</li>              
              <li>Introduction to EDA and Data Preparation</li>              
              <li>Data Cleaning and Transformation</li>              
              <li>Initial Data Exploration and Summary Statistics-</li>              
              <li>Data Visualization</li>              
              <li>Feature Engineering and Outlier Detection</li>              
              <li>Hypothesis Testing and Presenting Findings</li>              
            </div>
          )}
          {selectedHeading === "Comprehensive Machine Learning Series" && (
            <div>
              <li>Introduction to Machine Learning and Data Preprocessing</li>
              <li>Classification Algorithms</li>
              <li>Regression Algorithms</li>
              <li>Advanced Classification and Regression Algorithms</li>
              <li>Unsupervised Algorithms and Dimensionality Reduction</li>
              <li>Association Rule Learning and Advanced Unsupervised Learning</li>
              <li>Model Evaluation Techniques and Reinforcement Learning Basics</li>
              <li>Advanced Topics in Machine Learning</li>
            </div>
          )}
          {selectedHeading === "Comprehensive Deep Learning and NLP" && (
            <div>
              <li> Introduction to Deep Learning and Neural Networks</li>
              <li>Convolutional Neural Networks (CNNs) for Image Processing</li>
              <li> Recurrent Neural Networks (RNNs) and Their Applications</li>
              <li>Introduction to Natural Language Processing (NLP)</li>
              <li>Transformers and Advanced NLP Models</li>
              <li>Advanced NLP Techniques</li>
              <li>Model Evaluation, Hyperparameter Tuning, and Deployment</li>
              <li>Generative Adversarial Networks (GANs)</li>
            </div>
          )}
        </Box>
        <Box className={classes.curriculamheading}>
          <Typography
            variant="h5"
            color="initial"
            className={
              selectedHeading === "Core and Advanced Python Programming"
                ? classes.activeHeading
                : null
            }
            onClick={() =>
              handleHeadingClick("Core and Advanced Python Programming")
            }
          >
            Core and Advanced Python Programming
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={selectedHeading === "SQL" ? classes.activeHeading : null}
            onClick={() => handleHeadingClick("SQL")}
          >
            SQL
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={
              selectedHeading ===
              "Foundations of Mathematics in Data Science and EDA"
                ? classes.activeHeading
                : null
            }
            onClick={() =>
              handleHeadingClick(
                "Foundations of Mathematics in Data Science and EDA"
              )
            }
          >
            Foundations of Mathematics in Data Science and EDA
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={
              selectedHeading === "Comprehensive Machine Learning Series"
                ? classes.activeHeading
                : null
            }
            onClick={() =>
              handleHeadingClick("Comprehensive Machine Learning Series")
            }
          >
            Comprehensive Machine Learning Series
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            className={
              selectedHeading === "Comprehensive Deep Learning and NLP"
                ? classes.activeHeading
                : null
            }
            onClick={() =>
              handleHeadingClick("Comprehensive Deep Learning and NLP")
            }
          >
            Core and Advanced Python Programming
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculam;
