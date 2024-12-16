import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    costmain:{
        marginBottom:"20px"
    },
  costhead: {
    textAlign: "center !important",
    textTransform: "uppercase !important",
    fontWeight: "bold !important",
    marginBottom: "15px !important",
  },
  costmainbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
},
costbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    backgroundColor:"#ffffff",
    borderRadius:"20px",
  },
  costimg: {},
  costtxt: {
    width: "400px",
    textTransform: "capitalize",
    minHeight:"140px"
  },
  costbold: {
    fontWeight: "bold !important",
  },
}));
