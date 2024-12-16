// import React from "react";
// import { useStyles } from "./styles";
// import { Box, Typography, Button } from "@mui/material";
// import Pi from "../../../../Assets/pi.svg";

// const Jobs = () => {
//   const classes = useStyles();
//   return (
//     <Box className={classes.jobmain}>
//       <Typography variant="h4" color="initial" className={classes.jobshead}>
//         Launch Your Career with Top Opportunities
//       </Typography>
//       <Box className={classes.jobboxes}>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Data Scientist
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience: Fresher
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location : Hyderabad
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Machine Learning Engineer
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience : 0-1 year
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location: Remote
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Data Scientist
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience: Fresher
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location : Hyderabad
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Data Scientist
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience: Fresher
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location : Hyderabad
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Data Scientist
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience: Fresher
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location : Hyderabad
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//         <Box className={classes.jobbox}>
//           <img src={Pi} alt="piimg" className={classes.jobicon} />
//           <Box className={classes.jobdetails}>
//             <Typography
//               variant="h5"
//               color="initial"
//               className={classes.jobrole}
//             >
//               Data Scientist
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblevel}
//             >
//               Experience: Fresher
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.joblocation}
//             >
//               Job Location : Hyderabad
//             </Typography>
//             <Typography
//               variant="body1"
//               color="initial"
//               className={classes.jobcost}
//             >
//               Entry-Level : 4.8LPA
//             </Typography>
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             className={classes.applybutton}
//           >
//             Apply Now
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Jobs;

import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Jobmain from "../../../Elements//Jobsmain/jobsmain";

// Import multiple icons
import DataScienceIcon from "../../../../Assets/pi.svg";
import MLIcon from "../../../../Assets/pi.svg";
import SoftwareIcon from "../../../../Assets/pi.svg";
import AnalystIcon from "../../../../Assets/pi.svg";
import BackendIcon from "../../../../Assets/pi.svg";
import FrontendIcon from "../../../../Assets/pi.svg";

const useJobsStyles = makeStyles(() => ({
  jobmain: {
    position: "relative",
    margin: "50px 20px 40px 20px",
  },
  jobshead: {
    fontWeight: "bold !important",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "30px !important",
  },
  jobboxes: {
    display: "flex",
    flexWrap: "wrap", // Ensures wrapping for responsiveness
    justifyContent: "center", // Center-align the boxes for smaller screens
    gap: "50px 170px", // Gap between boxes
    padding: "20px 40px", // Reduced padding for smaller screens
  },
}));

const Jobs = () => {
  const classes = useJobsStyles();

  // Sample job data with specific icons
  const jobData = [
    { 
      icon: DataScienceIcon,
      role: "Data Scientist", 
      experience: "Fresher", 
      location: "Hyderabad", 
      salary: "4.8LPA" 
    },
    { 
      icon: MLIcon,
      role: "Machine Learning Engineer", 
      experience: "0-1 year", 
      location: "Remote", 
      salary: "4.8LPA" 
    },
    { 
      icon: SoftwareIcon,
      role: "Software Engineer", 
      experience: "Fresher", 
      location: "Bangalore", 
      salary: "5.0LPA" 
    },
    { 
      icon: AnalystIcon,
      role: "Data Analyst", 
      experience: "0-2 years", 
      location: "Pune", 
      salary: "4.5LPA" 
    },
    { 
      icon: BackendIcon,
      role: "Backend Developer", 
      experience: "Fresher", 
      location: "Chennai", 
      salary: "4.7LPA" 
    },
    { 
      icon: FrontendIcon,
      role: "Frontend Developer", 
      experience: "0-1 year", 
      location: "Hyderabad", 
      salary: "4.6LPA" 
    }
  ];

  return (
    <Box className={classes.jobmain}>
      <Typography 
        variant="h4" 
        color="initial" 
        className={classes.jobshead}
      >
        Launch Your Career with Top Opportunities
      </Typography>
      <Box className={classes.jobboxes}>
        {jobData.map((job, index) => (
          <Jobmain 
            key={index} 
            icon={job.icon}
            role={job.role}
            experience={job.experience}
            location={job.location}
            salary={job.salary}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Jobs;