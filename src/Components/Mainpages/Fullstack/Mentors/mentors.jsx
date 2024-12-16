// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography } from "@mui/material";
// import Rectangle from "../../../../Assets/Rectanglejf.png";

// const Mentors = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.mentormain}>
//       <Typography variant="h4" color="initial" className={classes.mentorhead}>
//         Learn from Those Who've Already Mastered the Path
//       </Typography>
//       <Box className={classes.mentorboxes}>
//         <Box className={classes.mentorbox}>
//           <img src={Rectangle} alt="iod" className={classes.mentorimage} />
//           <Typography
//             variant="h5"
//             color="initial"
//             className={classes.mentorname}
//           >
//             Krishna Manas
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorfield}
//           >
//             Machine Learning and Artificial Intelligence Engineer
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorexp}
//           >
//             5+ years of experience
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorteach}
//           >
//             Teaching : Data Science Engineer
//           </Typography>
//         </Box>
//         <Box className={classes.mentorbox}>
//           <img src={Rectangle} alt="iod" className={classes.mentorimage} />
//           <Typography
//             variant="h5"
//             color="initial"
//             className={classes.mentorname}
//           >
//             Pavan Kumar
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorfield}
//           >
//             Vajra.ai,
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorexp}
//           >
//             6+ years of experience
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorteach}
//           >
//             Teaching : Backend development
//           </Typography>
//         </Box>
//         <Box className={classes.mentorbox}>
//           <img src={Rectangle} alt="iod" className={classes.mentorimage} />
//           <Typography
//             variant="h5"
//             color="initial"
//             className={classes.mentorname}
//           >
//             Hemanth sai ram
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorfield}
//           >
//             Senior Software Engineer
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorexp}
//           >
//             5+ years of experience
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorteach}
//           >
//             Teaching : Full Stack Development 
//           </Typography>
//         </Box>
//         <Box className={classes.mentorbox}>
//           <img src={Rectangle} alt="iod" className={classes.mentorimage} />
//           <Typography
//             variant="h5"
//             color="initial"
//             className={classes.mentorname}
//           >
//             Laxman Eadala
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorfield}
//           >
//             Reliance
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorexp}
//           >
//             6+ years of experience 
//           </Typography>
//           <Typography
//             variant="body2"
//             color="initial"
//             className={classes.mentorteach}
//           >
//             Teaching : Full Stack Development 
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Mentors;
import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Mentorsmain from '../../../Elements//Mentorsmain/mentorsmain';

const useStyles = makeStyles(() => ({
  mentormain: {
    margin: '20px',
    padding: '20px',
  },
  mentorhead: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '25px',
  },
  mentorboxes: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
}));

const mentorsData = [
  {
    image: '/path/to/image1.png', // Replace with actual image paths
    name: 'Krishna Manas',
    field: 'Machine Learning and AI Engineer',
    experience: '5+ years of experience',
    teaching: 'Data Science Engineering'
  },
  {
    image: '/path/to/image2.png',
    name: 'Pavan Kumar',
    field: 'Vajra.ai Software Engineer',
    experience: '6+ years of experience',
    teaching: 'Backend Development'
  },
  {
    image: '/path/to/image3.png',
    name: 'Hemanth Sai Ram',
    field: 'Senior Software Engineer',
    experience: '5+ years of experience',
    teaching: 'Full Stack Development'
  },
  {
    image: '/path/to/image4.png',
    name: 'Laxman Eadala',
    field: 'Reliance Software Engineer',
    experience: '6+ years of experience',
    teaching: 'Full Stack Development'
  }
];

const Mentors = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mentormain}>
      <Typography variant="h4" className={classes.mentorhead}>
        Learn from Those Who've Already Mastered the Path
      </Typography>
      <Box className={classes.mentorboxes}>
        {mentorsData.map((mentor, index) => (
          <Mentorsmain key={index} mentor={mentor} />
        ))}
      </Box>
    </Box>
  );
};

export default Mentors;