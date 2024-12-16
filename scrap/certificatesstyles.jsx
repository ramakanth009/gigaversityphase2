import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  certificates_main: {
    background: "linear-gradient(180deg, #D0E8FF 0%, #8AC7FF 15%, #FFFFFF 35.5%, #FFFFFF 50%, #BCDEFF 67.5%, #D0E8FF 100%)",

    padding: "5px",
    margin:"40px 30px",
    borderRadius:"60px"
  },
  certificates_sub: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:"30px"
  },
  certificates_head: {
    textAlign: "center",
    fontWeight: "bold !important",
    textTransform:"uppercase",
    marginBottom:"20px !important"
  },
  certificate: {
    width: "500px",
    paddingRight: "10px",
  },

  certi_box: {
    width:"50%",
    padding: "10px 5px",
    paddingLeft: "20px",
  },
  hat: {
    paddingRight: "10px",
  },
  certi_text: {
    // fontSize: "1.8rem",
    fontWeight: "bold !important", 
    letterSpacing:"2.5px !important"
  },
  certi_title: {
    // fontSize: "1.8rem",
    textAlign:"center",
    fontWeight: "bold !important", 
    marginBottom:"40px !important"

  },
  certi_point:{
    display:"flex",
    // justifyContent:"center",
    alignItems:"center",
    gap:"20px",
    marginBottom:"40px !important"
  }
}));
