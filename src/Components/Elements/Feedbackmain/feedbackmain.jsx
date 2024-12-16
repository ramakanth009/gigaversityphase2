import React from 'react';
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useFeedbackCardStyles = makeStyles(() => ({
  feedbackCard: {
    width: "390px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px",
    borderRadius: "20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "@media (max-width: 1200px)": {
      width: "calc(50% - 40px)",
      margin: "10px",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      margin: "10px 0",
    },
  },
  feedWho: {
    minHeight:"50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  personName: {
    fontWeight: "bold !important",
  },
  feedReview: {
    minHeight:"160px",
    padding: "0 20px",
    textAlign: "center",
  },
}));

const Feedbackmain = ({ 
  image, 
  name, 
  role, 
  review, 
  variant = 'primary' 
}) => {
  const classes = useFeedbackCardStyles();

  return (
    <Box 
      className={classes.feedbackCard}
      sx={{ 
        background: variant === 'primary' 
          ? "#D0E8FF" 
          : "#9DCFFF" 
      }}
    >
      <Box className={classes.feedWho}>
        <img 
          src={image} 
          alt={`${name} profile`} 
          className={classes.profileImage}
        />
        <Typography
          variant="h6"
          color="initial"
          className={classes.personName}
        >
          {name}, {role}
        </Typography>
      </Box>
      
      <Box className={classes.feedReview}>
        <Typography variant="body1" color="initial">
          "{review}"
        </Typography>
      </Box>
    </Box>
  );
};

export default Feedbackmain;