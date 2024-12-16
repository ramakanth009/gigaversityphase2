// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles(() => ({
//   jobmain: {
//     position: "relative",
//     margin:"50px 20px 40px 20px"
//   },
//   jobshead: {
//     fontWeight: "bold !important",
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
//   jobboxes: {
//     display: "flex",
//     flexWrap: "wrap", // Ensures wrapping for responsiveness
//     justifyContent: "space-between", // Space between the boxes
//     gap: "50px", // Gap between boxes
//     padding: "20px 140px", // Padding around the container
//   },
  
//   jobbox: {
//     background:
//       "linear-gradient(180deg, #D0E8FF 0%, #8AC7FF 15%, #FFFFFF 35.5%, #FFFFFF 50%, #BCDEFF 67.5%, #D0E8FF 100%)",
//     // height: "400px",
//     width: "calc((100% / 3) - 100px)", // Dynamically calculates box width for 3 boxes (subtracting gap space)
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     borderRadius: "40px",
//   },
  
//   jobicon: {
//     backgroundColor: "#ffffff",
//     padding: "20px 45px",
//     borderRadius: "20px",
//     marginTop: "15px",
//   },
//   jobdetails:{
//     height:"160px !important",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   jobrole: {
//     fontWeight: "bold !important",
//     marginBottom: "5px !important",
//     textAlign:"center",
//     width:"90%"
//   },
//   joblevel: {
//     fontWeight: "bold !important",
//     marginBottom: "5px !important",
//     textAlign:"center"
//   },
//   joblocation: {
//     fontWeight: "bold !important",
//     marginBottom: "5px !important",
//     textAlign:"center"
//   },
//   jobcost: {
//     fontWeight: "bold !important",
//     marginBottom: "5px !important",
//     textAlign:"center"
//   },
//   applybutton: {
//     backgroundColor: "#1E90FF !important",
//     borderRadius: "10px !important",
//     padding: "8px 60px !important",
//     position: "absolute",
//     bottom: "-11px",
//   },
// }));
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  jobmain: {
    position: "relative",
    margin: "50px 20px 40px 20px",
  },
  jobshead: {
    fontWeight: "bold !important",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom:"30px !important"

  },
  jobboxes: {
    display: "flex",
    flexWrap: "wrap", // Ensures wrapping for responsiveness
    justifyContent: "center", // Center-align the boxes for smaller screens
    gap: "50px 170px", // Gap between boxes
    padding: "20px 40px", // Reduced padding for smaller screens
  },
  jobbox: {
    background:
      "linear-gradient(180deg, #D0E8FF 0%, #8AC7FF 15%, #FFFFFF 35.5%, #FFFFFF 50%, #BCDEFF 67.5%, #D0E8FF 100%)",
    width: "calc((100% / 3) - 160px)", // Default width for larger screens (3 per row)
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "40px",
    transition: "all 0.3s ease-in-out", // Smooth transition for responsive changes
    "@media (max-width: 1200px)": {
      width: "calc((100% / 2) - 30px)", // 2 per row for medium screens
    },
    "@media (max-width: 768px)": {
      width: "calc(100% - 40px)", // Full width for smaller screens
    },
  },
  jobicon: {
    backgroundColor: "#ffffff",
    padding: "20px 45px",
    borderRadius: "20px",
    marginTop: "15px",
  },
  jobdetails: {
    height: "160px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  jobrole: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
    width: "90%",
  },
  joblevel: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  joblocation: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  jobcost: {
    fontWeight: "bold !important",
    marginBottom: "5px !important",
    textAlign: "center",
  },
  applybutton: {
    backgroundColor: "#1E90FF !important",
    borderRadius: "10px !important",
    padding: "8px 60px !important",
    position: "absolute",
    bottom: "-11px",
  },
}));
