import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  instructorhead: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "20px 70px",
    textAlign: "center",
  },
  instructorslides: {
    padding: "20px 80px 20px 30px",
    // textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"40px",
  },
  instructorbox:{
    height:"395px",
    width:"350px"
  },
  instructorsimg: {
    height: "200px",
    width: "200px",
    objectFit:"contain",
    borderRadius:"110px",
    border:"5px solid #daebfe"
  },
  instructorsname:{
    fontSize:"1.5rem",
    color:"#1455FE",
    fontWeight:"bold",
  }
}));
