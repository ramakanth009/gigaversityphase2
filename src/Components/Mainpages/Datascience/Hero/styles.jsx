import { makeStyles } from "@mui/styles";
import heroImage from "../../../../Assets/ds-hero.jpg";

export const useStyles = makeStyles(() => ({
  heroimage: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  heromain:{
    width:"60%",
    padding:" 60px 0px 20px 100px"
  },
  herotext: {
    fontSize: "2.1rem !important",
    color: "#fff",
    fontWeight: "bold !important",
    paddingBottom:"20px",
    lineHeight:"50px !important",
    width: "80% !important",
    textTransform:"uppercase"
},
herosub: {
    fontSize: "1.1rem !important",
    color: "#fff !important",
    width: "70% !important",
    paddingBottom:"40px",

  },
  highlight: {
    color: "#81F6FF",
  },
  buttons:{
    display:"flex",
    alignItems:"flex-start",
    gap:"50px",
    paddingBottom:"30px"
  },
  button1:{
    backgroundColor:"#1E90FF !important",
    padding:"9px 20px !important",
    fontSize:"1rem !important"
  },
  button2:{
    backgroundColor:"#ffffff !important",
    padding:"9px 15px !important",
    fontSize:"1rem !important",
    color:"#000000 !important"
  }
}));
