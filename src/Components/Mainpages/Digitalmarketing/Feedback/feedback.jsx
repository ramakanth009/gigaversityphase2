// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Circle from "../../../../Assets/Ellipse.png";

// const Feedback = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.feedbackmain}>
//       <Typography variant="h4" color="initial" className={classes.feedbackhead}>
//         Feedback from Our Community
//       </Typography>
//       <Box className={classes.feedboxes}>
//         <Box className={classes.feedbox1}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="profile" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Riya M., Data Analyst
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//               "Gigaversity has been a game-changer for my career. The projects were hands-on, and the instructors explained complex concepts in a way that made them easy to understand. I landed my first job as a data analyst within two months of completing the program!”
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.feedbox2}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Arjun S., Data Engineer
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//             “Gigaversity’s curriculum focuses so much on real-world applications. By the time I graduated, I felt confident in my skills and knew exactly what to expect in my role as a data engineer. I couldn’t have asked for a better start to my career.”
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.feedbox1}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Nisha K., ML Engineer
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//             “The mentors at Gigaversity are amazing! They guided me through the technical material and provided insights into what companies are looking for. The learning environment was very supportive, and I felt ready for my role as a machine learning engineer right out of the program.”
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.feedbox2}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Vikram P., Data Scientist
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//             “The comprehensive AI program at Gigaversity gave me everything I needed to secure a role as a data scientist. The mix of theory and practical projects helped me build a strong portfolio, which made my resume stand out. I’m now working at my dream company!”
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.feedbox1}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Shreya R., Business Analyst
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//             “I wasn’t sure if I’d be able to keep up, but the structured modules and step-by-step approach at Gigaversity made it easy to learn. I now feel confident in my business analytics skills and can apply what I’ve learned directly on the job.”
//             </Typography>
//           </Box>
//         </Box>
//         <Box className={classes.feedbox2}>
//           <Box className={classes.feedwho}>
//             <img src={Circle} alt="" />
//             <Typography
//               variant="h6"
//               color="initial"
//               className={classes.feedperson}
//             >
//               Rajesh M., Data Engineer
//             </Typography>
//           </Box>
          
//           <Box className={classes.feedreview}>
//             <Typography variant="body1" color="initial">
//             “Gigaversity’s courses were exactly what I needed to bridge the gap between theory and practice. The projects were relevant and gave me skills I could immediately show in interviews. I’m now working as a data engineer, and I’m grateful for the foundation I built here.”
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Feedback;

import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import FeedbackCard from "../../../Elements/Feedbackmain/feedbackmain";

// Import profile images
import ProfileImage1 from "../../../../Assets/Ellipse.png";
import ProfileImage2 from "../../../../Assets/Ellipse.png";
import ProfileImage3 from "../../../../Assets/Ellipse.png";
import ProfileImage4 from "../../../../Assets/Ellipse.png";
import ProfileImage5 from "../../../../Assets/Ellipse.png";
import ProfileImage6 from "../../../../Assets/Ellipse.png";

const useFeedbackStyles = makeStyles(() => ({
  feedbackMain: { 
    margin: "10px 0 30px 0",
    padding: "0 20px",
  },
  feedbackHead: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
  },
  feedbackBoxes: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px 30px",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Feedback = () => {
  const classes = useFeedbackStyles();

  // Feedback data with profile images
  const feedbackData = [
    {
      image: ProfileImage1,
      name: "Riya M.",
      role: "Data Analyst",
      review: "Gigaversity has been a game-changer for my career. The projects were hands-on, and the instructors explained complex concepts in a way that made them easy to understand. I landed my first job as a data analyst within two months of completing the program!",
      variant: 'primary'
    },
    {
      image: ProfileImage2,
      name: "Arjun S.",
      role: "Data Engineer",
      review: "Gigaversity's curriculum focuses so much on real-world applications. By the time I graduated, I felt confident in my skills and knew exactly what to expect in my role as a data engineer. I couldn't have asked for a better start to my career.",
      variant: 'secondary'
    },
    {
      image: ProfileImage3,
      name: "Nisha K.",
      role: "ML Engineer",
      review: "The mentors at Gigaversity are amazing! They guided me through the technical material and provided insights into what companies are looking for. The learning environment was very supportive, and I felt ready for my role as a machine learning engineer right out of the program.",
      variant: 'primary'
    },
    {
      image: ProfileImage4,
      name: "Vikram P.",
      role: "Data Scientist",
      review: "The comprehensive AI program at Gigaversity gave me everything I needed to secure a role as a data scientist. The mix of theory and practical projects helped me build a strong portfolio, which made my resume stand out. I'm now working at my dream company!",
      variant: 'secondary'
    },
    {
      image: ProfileImage5,
      name: "Shreya R.",
      role: "Business Analyst",
      review: "I wasn't sure if I'd be able to keep up, but the structured modules and step-by-step approach at Gigaversity made it easy to learn. I now feel confident in my business analytics skills and can apply what I've learned directly on the job.",
      variant: 'primary'
    },
    {
      image: ProfileImage6,
      name: "Rajesh M.",
      role: "Data Engineer",
      review: "Gigaversity's courses were exactly what I needed to bridge the gap between theory and practice. The projects were relevant and gave me skills I could immediately show in interviews. I'm now working as a data engineer, and I'm grateful for the foundation I built here.",
      variant: 'secondary'
    }
  ];

  return (
    <Box className={classes.feedbackMain}>
      <Typography 
        variant="h4" 
        color="initial" 
        className={classes.feedbackHead}
      >
        Feedback from Our Community
      </Typography>
      <Box className={classes.feedbackBoxes}>
        {feedbackData.map((feedback, index) => (
          <FeedbackCard
            key={index}
            image={feedback.image}
            name={feedback.name}
            role={feedback.role}
            review={feedback.review}
            variant={feedback.variant}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Feedback;