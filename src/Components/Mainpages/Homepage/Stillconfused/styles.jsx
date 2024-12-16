import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  stillconfused: {
    // fontFamily: "var(--font-primary) !important",
    height: "auto",
    border: "4px solid #1E90FF",
    borderRadius: "10px",
    margin: "40px 30px",
    "& .MuiTypography-root": {
      fontFamily: "var(--font-primary)",
      textAlign:"center"
    },
    "& .MuiTypography-body1": {
      fontFamily: "var(--font-primary)",
    //   fontSize:"1rem"
    },
    display:"flex",
    padding:"0px 30px"
  },
  scbox1:{
    width:"70%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px 60px",
    textAlign:"center"
  },
  scbox2:{
    width:"30%",
  }
}));
