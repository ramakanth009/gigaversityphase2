import React, { useState } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Desktop from "../../../../Assets/desktop.png";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const classes = useStyles();
  return (
    <Box className={classes.form_main}>
      <Box
        className={classes.form_right}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 500,
          mx: "auto",
          // p: 3,
        }}
      >
        <Stack
          spacing={5}
          sx={{
            width: "100%",
            maxWidth: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: 3,
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: 3,
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: 3,
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            multiline
            rows={5}
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
                bgcolor: "white",
                boxShadow: 3,
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <Button
            type="submit"
            // variant="contained"
            className={classes.form_button}
            sx={{
              py: 1.5,
              // borderRadius: 4,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: 2,
            }}
          >
            Sign up for Free
          </Button>
        </Stack>
      </Box>
      <Box className={classes.form_left}>
        <Typography variant="h4" className={classes.left_heading}>
          Join <span className={classes.largest}>World's largest</span> learning
          platform today
        </Typography>
        <Typography variant="h6" className={classes.smallest}>
          Start learning by registering for free
        </Typography>
        <img src={Desktop} alt="Desktop" className={classes.image} />
      </Box>
    </Box>
  );
};

export default Form;
