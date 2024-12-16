// // import { makeStyles } from "@mui/styles";

// // export const useStyles = makeStyles(() => ({
// //   curriculammain: {},
// //   curriculamhead: {
// //     textAlign: "center",
// //     fontWeight: "bold !important",
// //   },
// //   curriculamcontent: {
// //     background:
// //       "radial-gradient(50% 50% at 50% 50%, #E4F2FF 46%, #93C8FC 100%)",
// //     display: "flex",
// //   },
// //   activeHeading: {
// //     backgroundColor: "#ffffff",
// //     borderRadius: "20px",
// //     padding: "20px 40px",
// //     fontWeight: "bold !important",
// //   },
// //   curriculamheading: {
// //     width: "400px",
// //     backgroundColor: "#1E90FF",
// //     padding: "20px 80px",
// //   },
// // }));
// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   curriculammain: {},
//   curriculamhead: {
//     textAlign: "center",
//     fontWeight: "bold !important",
//   },
//   curriculamcontent: {
//     background:
//       "radial-gradient(50% 50% at 50% 50%, #E4F2FF 46%, #93C8FC 100%)",
//     display: "flex",
//   },
//   activeHeading: {
//     backgroundColor: "#ffffff",
//     borderRadius: "20px",
//     padding: "20px 40px",
//     fontWeight: "bold !important",
//     transition: "all 0.3s ease",
//   },
//   activeHeadingRed: {
//     backgroundColor: "#ffffff", // Bright red background
//     color: "white", // White text for better readability
//     borderRadius: "20px",
//     // padding: "20px 40px",
//     fontWeight: "bold !important",
//     transition: "all 0.3s ease",
//   },
//   curriculamheading: {
//     width: "400px",
//     backgroundColor: "#1E90FF",
//     padding: "20px 80px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px", // Add some space between headings
//     fontWeight: "bold !important",
//   },
//   curriculamcontentBody: {
//     flex: 1,
//     padding: "20px",
//     backgroundColor: "white",
//   },
// }));

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  curriculammain: {},
  curriculamhead: {
    textAlign: "center",
    fontWeight: "bold !important",
  },
  curriculamcontent: {
    display: "flex",
  },
  curriculamcontentBody: {
    flex: 1,
    padding: "80px 50px",
    backgroundColor: " #CDE7FF",
    fontSize: "2rem",
    borderRadius:"20px",
  },
  curriculamdisplay: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    // alignItems:"center"
  },
  // Default state for headings
  headingDefault: {
    cursor: "pointer",
    padding: "15px 30px",
    margin: "10px 0",
    borderRadius: "15px",
    backgroundColor: "#1E90FF",
    color: "white",
    transition: "all 0.3s ease",
    // '&:hover': {
    // backgroundColor: "#4169E1",
    // }
  },
  // Active/Clicked state for headings
  headingActive: {
    cursor: "pointer",
    padding: "15px 30px",
    margin: "10px 0",
    borderRadius: "15px",
    backgroundColor: "#ffffff", // Bright red when active
    color: "white",
    fontWeight: "bold",
    transform: "scale(1.05)", // Slight scale effect
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  },
  curriculamheading: {
    width: "400px",
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  // curriculamcontentBody: {
  //   flex: 1,
  //   padding: "20px",
  //   backgroundColor: "white",
  // },
}));
