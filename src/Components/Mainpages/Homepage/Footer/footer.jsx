import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import logo from "../../../../Assets/Screenshot_11-10-2024_121427_-photoaidcom-cropped.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const classes = useStyles();

  const socialLinks = [
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/your-whatsapp-number",
      className: classes.footer_whatsapp,
    },
    {
      icon: EmailIcon,
      href: "mailto:your-email@example.com",
      className: classes.footer_email,
    },
    {
      icon: FacebookIcon,
      href: "https://facebook.com/your-page",
      className: classes.footer_facebook,
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/your-profile",
      className: classes.footer_instagram,
    },
    {
      icon: LinkedInIcon,
      href: "https://linkedin.com/in/your-profile",
      className: classes.footer_linkedin,
    },
    {
      icon: XIcon,
      href: "https://twitter.com/your-profile",
      className: classes.footer_x,
    },
  ];

  const handleSocialClick = (href) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Box className={classes.footer_main}>
        <Box className={classes.footer_sub1}>
          <Box className={classes.footer_logo_sec}>
            <img src={logo} alt="logo" className={classes.footer_logo} />
            <p>Top learning experiences that create more talent in the world</p>
          </Box>
          <Box>
            <h3 className={classes.headings}>Explore Gigaversity</h3>
            <p>Full Stack Development</p>
            <p>Data Science</p>
            <p>Digital Marketing</p>
            <p>Graphic Designing</p>
            <p>Bridge Courses</p>
            <p>Master Internship</p>
          </Box>
          <Box>
            <h3 className={classes.headings}>Bridge Courses</h3>
            <p>Html, Css, Js</p>
            <p>Java & SpringBoot</p>
            <p>My SQL</p>
            <p>Python</p>
            <p>Devops</p>
            <p>AWS</p>
            <p>Automation Testing</p>
          </Box>
          <Box>
            <h3 className={classes.headings}>Master Internships</h3>
            <p>HRMS</p>
            <p>CRM</p>
            <p>Social Media</p>
            <p>payroll</p>
            <p>OTT</p>
            <p>E-Commerce</p>
            <p>Marketplaces Apps</p>
          </Box>
          <Box>
            <h3 className={classes.headings}>Master Internships In DS</h3>
            <p>ChatGPT(Text to Text)</p>
            <p>ChatGPT(Image to Text)</p>
            <p>ChatGPT(Speech to Text)</p>
            <p>ATS Tool</p>
            <p>Text to Speech App</p>
          </Box>
          <Box>
            <h3 className={classes.headings}>Resources</h3>
            <p>About us</p>
            <p>Become a Mentor</p>
            <p>Become a TA</p>
            <p>Hire from us</p>
          </Box>
        </Box>
        <Box className={classes.footer_sub2}>
          <Box>
            <p>© 2024 Gigaversity. All rights reserved.</p>
          </Box>
          <Box className={classes.footer_socialmedia}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <IconComponent
                  key={index}
                  className={social.className}
                  onClick={() => handleSocialClick(social.href)}
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.5)",
                      color: social.color,
                    },
                  }}
                />
              );
            })}
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="instagram-gradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#ffdc80" }} />
                  <stop offset="25%" style={{ stopColor: "#f77737" }} />
                  <stop offset="50%" style={{ stopColor: "#fd1d1d" }} />
                  <stop offset="75%" style={{ stopColor: "#e31c79" }} />
                  <stop offset="100%" style={{ stopColor: "#833ab4" }} />
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
