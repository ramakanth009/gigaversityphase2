import { makeStyles } from "@mui/styles";
import backgroundImage from "../../../../Assets/chat_background.png"; // Import the image

export const useStyles = makeStyles(() => ({
  chatwith_main: {
    background: `url(${backgroundImage})`,
    // Additional background properties
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 0px",
    margin: "10px 0px",
  },
  chatwith_box: {
    width: "70%",
    // height:"20px",
    backgroundColor: "#ffffff",
    padding: "20px 50px",
    border: "6px solid #1E90FF",
    borderRadius: "20px",
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center"
  },
  chatheadphones:{
    position:"relative",
    bottom:"175px",
    right:"-380px",
    animation: "$float 6s ease-in-out infinite",
},
"@keyframes float": {
  "0%": {
    transform: "translateY(0px)",
  },
  "50%": {
    transform: "translateY(-20px)",
  },
  "100%": {
    transform: "translateY(0px)",
  },
  },
  //   borderImage: "linear-gradient(90deg, #1E90FF 0%, #1CC3FF 100%) 1",
}));
