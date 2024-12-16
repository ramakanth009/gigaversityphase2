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
import Buildimg1 from "../../../../Assets/wtbuild1.svg";
import Buildimg2 from "../../../../Assets/wtbuild2.svg";
import Buildimg3 from "../../../../Assets/wtbuild3.svg";
import Buildimg4 from "../../../../Assets/wtbuild4.svg";

const Whatyoubuild = () => {
  const buildItems = [
    {
      image: Buildimg1,
      title: "Multi - model AI Chatbot",
      details: [
        "Build Chatbots That Go Beyond Words!",
        "Develop a chatbot that understands text, images, and voice inputs seamlessly.",
        "Understand how the chatbot combines NLP, computer vision, and speech recognition to deliver incredible results.",
        "Participate in workshops to learn how to build your own AI tools!",
        "Interactive Demo: Try it out! Upload a photo or ask a question right here."
      ]
    },
    {
      image: Buildimg2,
      title: "AI Quiz master",
      details: [
        "WIPRO, MERN Full Stack Developer",
        "7+ years of experience",
        "Teaching : Full Stack Development"
      ]
    },
    {
      image: Buildimg3,
      title: "Advanced Call Auditor",
      details: [
        "WIPRO, MERN Full Stack Developer",
        "7+ years of experience",
        "Teaching : Full Stack Development"
      ]
    },
    {
      image: Buildimg4,
      title: "ATS Tools",
      details: [
        "WIPRO, MERN Full Stack Developer",
        "7+ years of experience",
        "Teaching : Full Stack Development"
      ]
    }
  ];

  return <Whatyoubuildmain items={buildItems} />;
};

export default Whatyoubuild;