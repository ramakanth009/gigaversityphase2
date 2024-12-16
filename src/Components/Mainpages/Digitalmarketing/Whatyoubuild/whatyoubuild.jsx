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
import Buildimg9 from "../../../../Assets/wtbuild9.svg";
import Buildimg10 from "../../../../Assets/wtbuild10.svg";
import Buildimg11 from "../../../../Assets/wtbuild11.svg";
import Buildimg12 from "../../../../Assets/wtbuild12.svg";
import Buildimg13 from "../../../../Assets/wtbuild13.svg";
import Buildimg14 from "../../../../Assets/wtbuild14.svg";
import Buildimg15 from "../../../../Assets/wtbuild15.svg";

const Whatyoubuild = () => {
  const buildItems = [
    {
      image: Buildimg9,
      title: "Conduct an SEO Audit and Evaluate Metrics",
      details: [
        "In this project, you'll dive deep into an SEO audit, analyzing website performance and identifying areas for improvement. You’ll track key metrics to evaluate current SEO strategies and suggest actionable steps to enhance website ranking and visibility.",
      ],

    },
    {
      image: Buildimg10,
      title: "Create a Facebook Ad Campaign and Track Performance",
      details: [
        "You’ll create a Facebook Ad Campaign from scratch, setting the target audience and budget, and then monitor the campaign’s performance. Using analytics, you'll analyze results, tweak strategies, and optimize to improve ad effectiveness and ROI.",
      ],
    },
    {
      image: Buildimg11,
      title: "Set Up a Google Search Ad Campaign",
      details: [
        "In this project, you’ll set up a Google Search Ad campaign by selecting appropriate keywords, writing compelling ad copy, and adjusting bidding strategies. You’ll learn how to fine-tune the campaign for maximum reach and ensure it aligns with specific business goals.",
      ],
    },
    {
      image: Buildimg12,
      title: "Optimize Content with AI",
      details: [
        "You’ll leverage AI tools to analyze and optimize content for better search engine visibility. The project will guide you through the process of using AI to enhance your content strategy, ensuring your articles, blogs, and web pages rank higher and attract more traffic.",
      ],
    },
    {
      image: Buildimg13,
      title: "Create an Email Marketing Campaign and Funnel",
      details: [
        "This project involves building an email marketing campaign that includes creating a series of emails that nurture leads. You’ll design and set up an effective email funnel, track open rates and conversions, and optimize your campaigns to drive engagement and sales.",
      ],
    },
    {
      image: Buildimg14,
      title: "Launch an Affiliate Marketing Campaign for a Niche Product",
      details: [
        "You’ll create and manage an affiliate marketing campaign for a niche product. This includes identifying suitable affiliate partners, tracking their performance, and fine-tuning the campaign to drive sales and improve affiliate outreach strategies.",
      ],
    },
    {
      image: Buildimg15,
      title: "Create Google Analytics 4 (GA4) Property",
      details: [
        "In this project, you’ll set up and configure Google Analytics 4 (GA4) for a website, learning how to track website traffic and user behavior. You’ll gain hands-on experience with GA4's advanced features, like event tracking and custom reports, to analyze and interpret digital marketing data more effectively.",
      ],
    },
  ];

  return <Whatyoubuildmain items={buildItems} />;
};

export default Whatyoubuild;
