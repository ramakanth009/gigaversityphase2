// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Netflix from "../../../../Assets/netflix.svg"
// import Amazon from "../../../../Assets/amazon.svg"
// import Google from "../../../../Assets/google.svg"

// const Casestudies = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.casemain}>
//       <Typography variant="h4" color="initial" className={classes.casetitle}>
//         Actionable Insights : Case Studies from Leading Industry Brands
//       </Typography>
//       <Box className={classes.caseset}>
//         <Box className={classes.casebox}>
//             <img src={Netflix} alt="Netflix" />
//           <Typography variant="h6" color="initial" className={classes.caseboxtitle}>
//             Data Science in Personalized Recommendations (Netflix)
//           </Typography>
//           <Typography variant="body1" color="initial">In this case study, you will learn how Netflix applies collaborative filtering, deep learning, and user data to create personalized recommendations, driving over 80% of user engagement through tailored content.
//           </Typography>
//         </Box>
//         <Box className={classes.casebox}>
//             <img src={Amazon} alt="Netflix" />
//           <Typography variant="h6" color="initial" className={classes.caseboxtitle}>
//           Data Science in E-Commerce Optimization (Amazon)
//           </Typography>
//           <Typography variant="body1" color="initial">In this case study, you will learn how Amazon uses machine learning to analyze purchase patterns, user behavior, and pricing trends, driving a 35% sales increase through personalized recommendations and dynamic pricing.
//           </Typography>
//         </Box>
//         <Box className={classes.casebox}>
//             <img src={Google} alt="Netflix" />
//           <Typography variant="h6" color="initial" className={classes.caseboxtitle}>
//             Data Science in Search Engine Technology (Google)
//           </Typography>
//           <Typography variant="body1" color="initial">In this case study, you will learn how Google applies PageRank and NLP techniques to analyze query intent and user interactions, achieving real-time relevant results and a 92% global search engine market share.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Casestudies;

import React from "react";
import Casestudiesmain from "../../../Elements/Casestudiesmain/casestudiesmain";
import Boat from "../../../../Assets/boat.svg";
import Lenskart from "../../../../Assets/lenskart.svg";
import Cadbury from "../../../../Assets/Cadbury.svg";

const Casestudies = () => {
  const caseStudyData = [
    {
      image: Boat,
      title: "boAt’s Strategic Approach to Market Entry",
      description: "In this case study, discover how boAt harnessed influencer collaborations and unique branding to disrupt the audio accessories market and build customer loyalty."
    },
    {
      image: Lenskart,
      title: "Lenskart’s Mastery of Keyword Optimization",
      description: "This case study showcases Lenskart’s strategic use of targeted keywords and SEO practices to drive organic traffic and significantly boost conversions."
    },
    {
      image: Cadbury,
      title: `Cadbury’s Impactful "Kuch Achha Ho" Campaign`,
      description: `Explore how Cadbury's emotionally-driven "Kuch Achha Ho" campaign redefined customer engagement and strengthened its brand identity through storytelling.`
    }
  ];

  return <Casestudiesmain items={caseStudyData} />;
};

export default Casestudies;
