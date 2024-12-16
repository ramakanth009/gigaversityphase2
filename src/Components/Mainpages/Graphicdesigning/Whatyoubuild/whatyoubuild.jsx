// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Buildimg1 from "../../../../Assets/wtbuild1.svg";
// import Buildimg2 from "../../../../Assets/wtbuild2.svg";
// import Buildimg3 from "../../../../Assets/wtbuild3.svg";
// import Buildimg4 from "../../../../Assets/wtbuild4.svg";

// const Whatyoubuild = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.wtbuildmain}>
//       <Typography variant="h4" color="initial" className={classes.wtbuildhead}>
//         What you'll build along the way
//       </Typography>
//       <Box className={classes.wtbuildsub}>
//         <Box className={classes.wtbuildbox}>
//           <img
//             src={Buildimg1}
//             alt="Multi-model AI Chatbot"
//             className={classes.wtbuildimg}
//           />
//           <Box className={classes.wtbuildcontent}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.wtbuildcthead}
//             >
//               Multi - model AI Chatbot
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Build Chatbots That Go Beyond Words!
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Develop a chatbot that understands text, images, and voice inputs
//               seamlessly.
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Understand how the chatbot combines NLP, computer vision, and
//               speech recognition to deliver incredible results.
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Participate in workshops to learn how to build your own AI tools!
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Interactive Demo: Try it out! Upload a photo or ask a question right here.
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.wtbuildbox}>
//           <img
//             src={Buildimg2}
//             alt="Multi-model AI Chatbot"
//             className={classes.wtbuildimg}
//           />
//           <Box className={classes.wtbuildcontent}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.wtbuildcthead}
//             >
//               AI Quiz master
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               WIPRO, MERN Full Stack Developer
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               7+ years of experience
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Teaching : Full Stack Development
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.wtbuildbox}>
//           <img
//             src={Buildimg3}
//             alt="Multi-model AI Chatbot"
//             className={classes.wtbuildimg}
//           />
//           <Box className={classes.wtbuildcontent}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.wtbuildcthead}
//             >
//               Advanced Call Auditor
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               WIPRO, MERN Full Stack Developer
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               7+ years of experience
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Teaching : Full Stack Development
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.wtbuildbox}>
//           <img
//             src={Buildimg4}
//             alt="Multi-model AI Chatbot"
//             className={classes.wtbuildimg}
//           />
//           <Box className={classes.wtbuildcontent}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.wtbuildcthead}
//             >
//               ATS Tools
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               WIPRO, MERN Full Stack Developer
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               7+ years of experience
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.wtbuildctdata}
//             >
//               Teaching : Full Stack Development
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Whatyoubuild;
import React from "react";
import Whatyoubuildmain from "../../../Elements/Whatyoubuildmain/whatyoubuildmain";
import Buildimg16 from "../../../../Assets/wtbuild16.svg";
import Buildimg17 from "../../../../Assets/wtbuild17.svg";
import Buildimg18 from "../../../../Assets/wtbuild18.svg";
import Buildimg19 from "../../../../Assets/wtbuild19.svg";
import Buildimg20 from "../../../../Assets/wtbuild20.svg";
import Buildimg21 from "../../../../Assets/wtbuild21.svg";

const Whatyoubuild = () => {
  const buildItems = [
    {
      image: Buildimg16,
      title: "Conduct an SEO Audit and Evaluate Metrics",
      details: [
        "In this project, you'll dive deep into an SEO audit, analyzing website performance and identifying areas for improvement. You’ll track key metrics to evaluate current SEO strategies and suggest actionable steps to enhance website ranking and visibility.",
      ],

    },
    {
      image: Buildimg17,
      title: "Develop a Brand Color Palette",
      details: [
        "In this project, you’ll create a cohesive and impactful color palette for a brand. You will explore color psychology and brand consistency to ensure the palette aligns with the brand's identity and target audience.",
      ],
    },
    {
      image: Buildimg18,
      title: "Design a Unique Logo and Brand Identity",
      details: [
        "You’ll design a custom logo and develop a full brand identity, including typography and visual elements. This project will focus on creating a strong brand presence that communicates the company's values effectively.",
      ],
    },
    {
      image: Buildimg19,
      title: "Create a Multi-Page Layout",
      details: [
        "In this project, you’ll design a multi-page layout for a magazine or brochure. You’ll focus on creating a harmonious design that emphasizes visual hierarchy, readability, and consistency across pages.",
      ],
    },
    {
      image: Buildimg20,
      title: "Illustrate an Editorial Design",
      details: [
        "You’ll create an editorial illustration to complement a written piece. This project will guide you through the process of blending artistic expression with design principles to enhance the editorial content.",
      ],
    },
    {
      image: Buildimg21,
      title: "Build a Complete Brand Identity",
      details: [
        "You will create an entire brand identity for a fictional or real brand. This includes designing the logo, selecting the right typography, and defining the visual style to ensure brand consistency across different platforms",
      ],
    },
   
  ];

  return <Whatyoubuildmain items={buildItems} />;
};

export default Whatyoubuild;
