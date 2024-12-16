import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    mentorbox: {
      backgroundColor: '#ABD5FF',
      height: '450px', // Increased to accommodate fixed-height text areas
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '55px',
      transition: 'transform 0.3s ease-in-out',
      padding: '20px',
      boxSizing: 'border-box',
      '&:hover': {
        transform: 'scale(1.05)',
      },
      '@media (max-width: 900px)': {
        width: '250px',
        height: '450px',
      },
      '@media (max-width: 600px)': {
        width: '100%',
        maxWidth: '280px',
      },
    },
    mentorimage: {
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      marginBottom: '20px',
      borderRadius: '50%',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
    },
    mentorname: {
      fontWeight: 'bold',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      textAlign: 'center',
      overflow: 'hidden',
    },
    mentorfield: {
      fontWeight: 'bold',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      textAlign: 'center',
      overflow: 'hidden',
      padding: '0 10px',
    },
    mentorexp: {
      fontWeight: 'bold',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      textAlign: 'center',
    },
    mentorteach: {
      fontWeight: 'bold',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
      textAlign: 'center',
      overflow: 'hidden',
    },
  }));
  
  const Mentorsmain = ({ mentor }) => {
    const classes = useStyles();
  
    return (
      <Box className={classes.mentorbox}>
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className={classes.mentorimage} 
        />
        <Box className={classes.textContainer}>
          <Typography variant="h5" className={classes.mentorname}>
            {mentor.name}
          </Typography>
          <Typography variant="body2" className={classes.mentorfield}>
            {mentor.field}
          </Typography>
          <Typography variant="body2" className={classes.mentorexp}>
            {mentor.experience}
          </Typography>
          <Typography variant="body2" className={classes.mentorteach}>
            Teaching: {mentor.teaching}
          </Typography>
        </Box>
      </Box>
    );
  };

export default Mentorsmain;