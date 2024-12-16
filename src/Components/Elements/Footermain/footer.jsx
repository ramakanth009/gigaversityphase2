import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import logo from "../../../../Assets/Screenshot_11-10-2024_121427_-photoaidcom-cropped.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles(() => ({
  footer_main: {
    backgroundColor: "#035CB4",
    height: "auto",
    paddingBottom: "20px",
  },
  footer_sub1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "50px 10px 50px 5px",
    color: "#ffffff",
    gap: "30px",
    flexWrap: "wrap", // Added for responsiveness
  },
  footer_logo_sec: {
    width: "18%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "4%",
    minWidth: "200px", // Ensure minimum width for smaller screens
  },
  footer_logo: {
    width: "30%",
    textAlign: "center",
  },
  footer_sub2: {
    backgroundColor: "#072747",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#ffffff",
    padding: "15px 10px",
    flexWrap: "wrap", // Added for responsiveness
  },
  footer_socialmedia: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  footer_whatsapp: {
    fill: "#25D366 !important",
  },
  footer_email: {
    fill: "#138BDE !important",
  },
  footer_facebook: {
    fill: "#1877F2 !important",
  },
  footer_instagram: {
    fill: "url(#instagram-gradient) !important",
  },
  footer_linkedin: {
    fill: "#0A66C2 !important",
  },
  footer_x: {
    fill: "#000000 !important",
  },
  footer_column: {
    display: "flex",
    flexDirection: "column",
    minWidth: "150px", // Ensure minimum width for columns
  },
  headings: {
    paddingBottom: "10px",
    borderBottom: "2px solid #ffffff",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  footer_link: {
    color: "#ffffff",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#e0e0e0",
    },
    marginBottom: "5px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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

  const FooterSection = ({ title, items }) => (
    <Box className={classes.footer_column}>
      <Typography variant="h6" className={classes.headings}>
        {title}
      </Typography>
      {items.map((item, index) => (
        <Typography
          key={index}
          className={classes.footer_link}
          onClick={() => navigate(item.route)}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );

  return (
    <div>
      <Box className={classes.footer_main}>
        <Box className={classes.footer_sub1}>
          <Box className={classes.footer_logo_sec}>
            <img src={logo} alt="logo" className={classes.footer_logo} />
            <Typography>
              Top learning experiences that create more talent in the world
            </Typography>
          </Box>

          <FooterSection 
            title="Explore Gigaversity" 
            items={[
              { label: "Full Stack Development", route: "/our-programs/full-stack-development" },
              { label: "Data Science", route: "/our-programs/data-science" },
              { label: "Digital Marketing", route: "/our-programs/digital-marketing" },
              { label: "Graphic Designing", route: "/our-programs/graphic-designing" },
              { label: "Bridge Courses", route: "/bridge-courses" },
              { label: "Master Internship", route: "/master-internships" }
            ]} 
          />

          <FooterSection 
            title="Bridge Courses" 
            items={[
              { label: "HTML, CSS, JavaScript", route: "/bridge-courses/html-css-js" },
              { label: "Java & Spring Boot", route: "/bridge-courses/java-spring-boot" },
              { label: "MySQL", route: "/bridge-courses/mysql" },
              { label: "Python", route: "/bridge-courses/python" },
              { label: "DevOps", route: "/bridge-courses/devops" },
              { label: "AWS", route: "/bridge-courses/aws" },
              { label: "Automation Testing", route: "/bridge-courses/automation-testing" }
            ]} 
          />

          <FooterSection 
            title="Master Internships" 
            items={[
              { label: "HRMS", route: "/master-internships/hrms" },
              { label: "CRM", route: "/master-internships/crm" },
              { label: "Social Media", route: "/master-internships/social-media" },
              { label: "Payroll", route: "/master-internships/payroll" },
              { label: "OTT", route: "/master-internships/ott" },
              { label: "E-Commerce", route: "/master-internships/e-commerce" },
              { label: "Marketplace Apps", route: "/master-internships/marketplace-apps" }
            ]} 
          />

          <FooterSection 
            title="Master Internships in DS" 
            items={[
              { label: "ChatGPT (Text to Text)", route: "/master-internships-ds/chatgpt-text-to-text" },
              { label: "ChatGPT (Image to Text)", route: "/master-internships-ds/chatgpt-image-to-text" },
              { label: "ChatGPT (Speech to Text)", route: "/master-internships-ds/chatgpt-speech-to-text" },
              { label: "ATS Tool", route: "/master-internships-ds/ats-tool" },
              { label: "Text-to-Speech App", route: "/master-internships-ds/text-to-speech" }
            ]} 
          />

          <FooterSection 
            title="Resources" 
            items={[
              { label: "About Us", route: "/about-us" },
              { label: "Become a Mentor", route: "/resources/become-mentor" },
              { label: "Become a TA", route: "/resources/become-ta" },
              { label: "Hire from Us", route: "/resources/hire-from-us" }
            ]} 
          />
        </Box>

        <Box className={classes.footer_sub2}>
          <Typography>© 2024 Gigaversity. All rights reserved.</Typography>
          
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
                    },
                  }}
                />
              );
            })}
            
            {/* Instagram Gradient SVG */}
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
