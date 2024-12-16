import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "./styles";
import Logo from "../../../../Assets/Screenshot_11-10-2024_121427_-photoaidcom-cropped.jpeg";

const pages = [
  "Our Programs",
  "Bridge Courses",
  "Master Internships",
  "Master Internships DS",
  "About us",
  "Contact Us",
  "Hire From Us",
];
const submenuItems = {
  "Our Programs": [
    "Full Stack Web Development",
    "Data Science",
    "Bridge Courses",
    "Master Internships",
  ],
  "Bridge Courses": [
    "Html, Css &  Js",
    "Java & Spring Boot",
    "My SQL",
    "Python",
    "Devops",
    "AWS",
  ],
  "Master Internships": [
    "HRMS",
    "CRM",
    "Social Media",
    "Payroll",
    "OTT",
    "E-Commerce",
  ],
  "Master Internships DS": [
    "ChatGPT(Text to Text)",
    "ChatGPT(Image to Text)",
    "ChatGPT(Speeech to Text)",
    "ATS Tool",
    "Text to Speech App",
  ],
  "About us": [""],
  "Contact Us": [""],
  "Hire From Us": [""],
};

const Header = () => {
  const classes = useStyles();
  const [anchorElSubmenu, setAnchorElSubmenu] = React.useState({});

  const handleOpenSubmenu = (page, event) => {
    setAnchorElSubmenu((prev) => ({ ...prev, [page]: event.currentTarget }));
  };

  const handleCloseSubmenu = (page) => {
    setAnchorElSubmenu((prev) => ({ ...prev, [page]: null }));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff",color:"#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", alignItems: "center" },
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
                textTransform: "uppercase !important",
                marginRight:"290px"
              }}
            >
              <img src={Logo} alt="company logo" className={classes.logoimg} />
              Gigaveristy
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "karla",
            }}
          >
            {pages.map((page) => (
              <div key={page}>
                <Button
                  onClick={(event) => handleOpenSubmenu(page, event)}
                  onMouseEnter={(event) => handleOpenSubmenu(page, event)}
                  sx={{ my: 2, color: "#000000", display: "block",textTransform: "none !important", }}
                >
                  {page}
                </Button>
                <Menu
                  anchorEl={anchorElSubmenu[page]}
                  open={Boolean(anchorElSubmenu[page])}
                  onClose={() => handleCloseSubmenu(page)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  {submenuItems[page].map((submenuItem) => (
                    <MenuItem
                      key={submenuItem}
                      onClick={() => handleCloseSubmenu(page)}
                    >
                      <Typography textAlign="center">{submenuItem}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
