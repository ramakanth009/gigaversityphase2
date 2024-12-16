import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Menu, 
  MenuItem, 
  Container, 
  Link 
} from '@mui/material';

// Logo import (replace with your actual logo path)
import Logo from '../../../Assets/Screenshot_11-10-2024_121427_-photoaidcom-cropped.jpeg';

// Navigation Configuration
const navigationConfig = {
  "Our Programs": [
    { label: "Full Stack Web Development", path: "/programs/full-stack" },
    { label: "Data Science", path: "/programs/data-science"},
    { label: "Digital Marketing", path: "/programs/digital-marketing"},
    { label: "Graphic Designing", path: "/programs/graphic-designing"},
    { label: "Bridge Courses", path: "/programs/bridge-courses" },
    { label: "Master Internships", path: "/programs/master-internships" }
  ],
  "Bridge Courses": [
    { label: "Html, Css & Js", path: "/bridge-courses/web-basics" },
    { label: "Java & Spring Boot", path: "/bridge-courses/java" },
    { label: "My SQL", path: "/bridge-courses/mysql" },
    { label: "Python", path: "/bridge-courses/python" },
    { label: "Devops", path: "/bridge-courses/devops" },
    { label: "AWS", path: "/bridge-courses/aws" }
  ],
  "Master Internships": [
    { label: "HRMS", path: "/master-internships/hrms" },
    { label: "CRM", path: "/master-internships/crm" },
    { label: "Social Media", path: "/master-internships/social-media" },
    { label: "Payroll", path: "/master-internships/payroll" },
    { label: "OTT", path: "/master-internships/ott" },
    { label: "E-Commerce", path: "/master-internships/ecommerce" }
  ],
  "Master Internships DS": [
    { label: "ChatGPT(Text to Text)", path: "/ds-internships/chatgpt-text" },
    { label: "ChatGPT(Image to Text)", path: "/ds-internships/chatgpt-image" },
    { label: "ChatGPT(Speech to Text)", path: "/ds-internships/chatgpt-speech" },
    { label: "ATS Tool", path: "/ds-internships/ats-tool" },
    { label: "Text to Speech App", path: "/ds-internships/text-to-speech" }
  ],
  "About us": [
    { label: "About Us", path: "/about" }
  ],
  "Contact Us": [
    { label: "Contact Us", path: "/contact" }
  ],
  "Hire From Us": [
    { label: "Hire From Us", path: "/hire" }
  ]
};

const Header = () => {
  const [anchorEls, setAnchorEls] = useState({});

  const handleMouseEnterMenu = (page, event) => {
    setAnchorEls(prev => ({ ...prev, [page]: event.currentTarget }));
  };

  const handleMouseLeaveMenu = (page) => {
    setAnchorEls(prev => ({ ...prev, [page]: null }));
  };

  return (
    <Box 
      sx={{
        backgroundColor: '#ffffff', 
        color: '#000000', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <Container maxWidth="xl">
        <Box 
          sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            py: 1
          }}
        >
          {/* Logo Section */}
          <Link 
            component={RouterLink} 
            to="/" 
            sx={{
              display: 'flex', 
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <img 
              src={Logo} 
              alt="company logo" 
              style={{
                height: '40px',
                padding: '10px',
                borderRadius: '50px',
                marginRight: '10px'
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                textTransform: "uppercase"
              }}
            >
              Gigaveristy
            </Typography>
          </Link>

          {/* Navigation Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {Object.keys(navigationConfig).map((page) => (
              <Box 
                key={page}
                onMouseEnter={(event) => handleMouseEnterMenu(page, event)}
                onMouseLeave={() => handleMouseLeaveMenu(page)}
                sx={{ position: 'relative' }}
              >
                <Button
                  sx={{ 
                    color: '#000000',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  {page}
                </Button>
                
                {navigationConfig[page].length > 0 && (
                  <Menu
                    anchorEl={anchorEls[page]}
                    open={Boolean(anchorEls[page])}
                    onClose={() => handleMouseLeaveMenu(page)}
                    MenuListProps={{
                      onMouseLeave: () => handleMouseLeaveMenu(page)
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    {navigationConfig[page].map((item) => (
                      <MenuItem
                        key={item.label}
                        component={RouterLink}
                        to={item.path}
                        onClick={() => handleMouseLeaveMenu(page)}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                          }
                        }}
                      >
                        <Typography textAlign="center">{item.label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;




































// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Button, 
//   Menu, 
//   MenuItem, 
//   Container, 
//   Link 
// } from '@mui/material';

// // Logo import (replace with your actual logo path)
// import Logo from '../../../../Assets/Screenshot_11-10-2024_121427_-photoaidcom-cropped.jpeg';
// // import Datascience from './Mainpages/Datascience';


// // Navigation Configuration
// const navigationConfig = {
//   "Our Programs": [
//     { label: "Full Stack Web Development", path: "/programs/full-stack" },
//     { label: "Data Science", path:"/src/Mainpages/Datascience.jsx"},
//     { label: "Bridge Courses", path: "/programs/bridge-courses" },
//     { label: "Master Internships", path: "/programs/master-internships" }
//   ],
//   "Bridge Courses": [
//     { label: "Html, Css & Js", path: "/bridge-courses/web-basics" },
//     { label: "Java & Spring Boot", path: "/bridge-courses/java" },
//     { label: "My SQL", path: "/bridge-courses/mysql" },
//     { label: "Python", path: "/bridge-courses/python" },
//     { label: "Devops", path: "/bridge-courses/devops" },
//     { label: "AWS", path: "/bridge-courses/aws" }
//   ],
//   "Master Internships": [
//     { label: "HRMS", path: "/master-internships/hrms" },
//     { label: "CRM", path: "/master-internships/crm" },
//     { label: "Social Media", path: "/master-internships/social-media" },
//     { label: "Payroll", path: "/master-internships/payroll" },
//     { label: "OTT", path: "/master-internships/ott" },
//     { label: "E-Commerce", path: "/master-internships/ecommerce" }
//   ],
//   "Master Internships DS": [
//     { label: "ChatGPT(Text to Text)", path: "/ds-internships/chatgpt-text" },
//     { label: "ChatGPT(Image to Text)", path: "/ds-internships/chatgpt-image" },
//     { label: "ChatGPT(Speech to Text)", path: "/ds-internships/chatgpt-speech" },
//     { label: "ATS Tool", path: "/ds-internships/ats-tool" },
//     { label: "Text to Speech App", path: "/ds-internships/text-to-speech" }
//   ],
//   "About us": [
//     { label: "About Us", path: "/about" }
//   ],
//   "Contact Us": [
//     { label: "Contact Us", path: "/contact" }
//   ],
//   "Hire From Us": [
//     { label: "Hire From Us", path: "/hire" }
//   ]
// };

// const Header = () => {
//   const [anchorEls, setAnchorEls] = useState({});

//   const handleMouseEnterMenu = (page, event) => {
//     setAnchorEls(prev => ({ ...prev, [page]: event.currentTarget }));
//   };

//   const handleMouseLeaveMenu = (page) => {
//     setAnchorEls(prev => ({ ...prev, [page]: null }));
//   };

//   const handleMenuItemClick = (path) => {
//     window.location.href = path;
//     setAnchorEls({});
//   };

//   return (
//     <Box 
//       sx={{
//         backgroundColor: '#ffffff', 
//         color: '#000000', 
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000
//       }}
//     >
//       <Container maxWidth="xl">
//         <Box 
//           sx={{
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'space-between',
//             py: 1
//           }}
//         >
//           {/* Logo Section */}
//           <Link 
//             href="/" 
//             sx={{
//               display: 'flex', 
//               alignItems: 'center',
//               textDecoration: 'none',
//               color: 'inherit'
//             }}
//           >
//             <img 
//               src={Logo} 
//               alt="company logo" 
//               style={{
//                 height: '40px',
//                 padding: '10px',
//                 borderRadius: '50px',
//                 marginRight: '10px'
//               }} 
//             />
//             <Typography
//               variant="h6"
//               noWrap
//               sx={{
//                 fontFamily: "Poppins",
//                 fontWeight: "bold",
//                 textTransform: "uppercase"
//               }}
//             >
//               Gigaveristy
//             </Typography>
//           </Link>

//           {/* Navigation Menu */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {Object.keys(navigationConfig).map((page) => (
//               <Box 
//                 key={page}
//                 onMouseEnter={(event) => handleMouseEnterMenu(page, event)}
//                 onMouseLeave={() => handleMouseLeaveMenu(page)}
//                 sx={{ position: 'relative' }}
//               >
//                 <Button
//                   sx={{ 
//                     color: '#000000',
//                     textTransform: 'none',
//                     '&:hover': {
//                       backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                     }
//                   }}
//                 >
//                   {page}
//                 </Button>
                
//                 {navigationConfig[page].length > 0 && (
//                   <Menu
//                     anchorEl={anchorEls[page]}
//                     open={Boolean(anchorEls[page])}
//                     onClose={() => handleMouseLeaveMenu(page)}
//                     MenuListProps={{
//                       onMouseLeave: () => handleMouseLeaveMenu(page)
//                     }}
//                     anchorOrigin={{
//                       vertical: "bottom",
//                       horizontal: "left",
//                     }}
//                     transformOrigin={{
//                       vertical: "top",
//                       horizontal: "left",
//                     }}
//                   >
//                     {navigationConfig[page].map((item) => (
//                       <MenuItem
//                         key={item.label}
//                         onClick={() => handleMenuItemClick(item.path)}
//                         sx={{
//                           '&:hover': {
//                             backgroundColor: 'rgba(0, 0, 0, 0.04)'
//                           }
//                         }}
//                       >
//                         <Typography textAlign="center">{item.label}</Typography>
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 )}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Header;