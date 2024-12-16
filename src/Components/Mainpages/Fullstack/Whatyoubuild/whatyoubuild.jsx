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
import Whatyoubuildmain from "../../../Elements//Whatyoubuildmain/whatyoubuildmain";
import Buildimg5 from "../../../../Assets/wtbuild5.svg";
import Buildimg6 from "../../../../Assets/wtbuild6.svg";
import Buildimg7 from "../../../../Assets/wtbuild7.svg";
import Buildimg8 from "../../../../Assets/wtbuild8.svg";

const Whatyoubuild = () => {
  const buildItems = [
    {
      image: Buildimg5,
      title: "Market Place Application",
      details: [
        "In this project, you will build a Social Media Dashboard that displays key metrics and ",
        "offers interactive features to analyze social media performance. You’ll create a ",
        "visually engaging dashboard with reusable components and effective data ",
        "management to track insights across different platforms.",
      ]
    },
    {
      image: Buildimg6,
      title: "HRMS",
      details: [
        "In this project, you will develop a Task Management System that allows users to ",
        "efficiently organize tasks with features like categories, due dates, and secure ",
        "authentication. You’ll focus on building a user-friendly interface and implementing ",
        "robust functionalities to enhance productivity."
      ]
    },
    {
      image: Buildimg7,
      title: "CRM Application",
      details: [
        "In this project, you will create a backend for an Inventory Management System that ",
        "efficiently tracks products, suppliers, and stock levels. Using Spring Boot and Java, ",
        "you’ll build a robust system that manages inventory, sends alerts for low-stock items, ",
        "and integrates with external systems for seamless operations."
      ]
    },
    {
      image: Buildimg8,
      title: "Social Media",
      details: [
        "In this project, you will build a backend for an Online Ticket Reservation System that",
        "allows users to select seats, make payments, and receive ticket confirmations. You’ll ",
        "develop a robust system using Spring Boot and Java, integrating payment gateways and ",
        "managing seat availability for smooth reservation processes."
      ]
    }
  ];

  return <Whatyoubuildmain items={buildItems} />;
};

export default Whatyoubuild;