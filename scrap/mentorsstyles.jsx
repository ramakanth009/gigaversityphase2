import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mentormain: {
    margin: "20px 20px !important",
},
mentorhead: {
    fontWeight: "bold !important",
    textAlign: "center",
    marginBottom:"25px !important",
  },
  mentorboxes:{
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"30px"
  },
  mentorbox: {
    backgroundColor: "#ABD5FF !important",
    height: "390px",
    width: "280px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:"55px"
  },
  mentorimage:{
    width:"250px",
    marginBottom:"20px",
    textAlign:"center",
  },
  mentorname: {
    fontWeight: "bold !important",
    marginBottom:"10px !important",
  },
  mentorfield: {
    fontWeight: "bold !important",
    marginBottom:"10px !important",
    // width:"200px",
    textAlign:"center",
},
mentorexp: {
    fontWeight: "bold !important",
    marginBottom:"10px !important",
    textAlign:"center",
},
mentorteach: {
    fontWeight: "bold !important",
    marginBottom:"10px !important",
    textAlign:"center",
  },
}));
