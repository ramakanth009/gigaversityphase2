import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  feemain: {
    margin: "20px 45px",
    borderRadius: "20px",
  },

  feeboxes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    padding: "20px",
    marginBottom: "30px",
  },

  feehead: {
    fontWeight: "bold!important",
    textTransform: "uppercase",
    textAlign: "center",
    // marginTop:"20px !important",
    padding: "40px 20px 50px 20px",
  },
  feebox: {
    background: "#ffffff",
    width: "20%",
    minHeight: "420px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px 20px 20px 20px ",
    borderRadius: "32px",
  },
  feeimg: {
    margin: "30px 30px !important",
    height: "80px ",
  },
  feesubhead: {
    color: "#1E90FF !important",
    fontWeight: "bold !important",
    height: "80px ",
    width: "90%",
    padding: "0 5px",
    textWrap: "balance",
  },
  feesubcontext: {
    fontSize: "1.050rem !important",
    padding: "0 10px",
    textTransform: "capitalize",
  },
  feesubbold:{
    fontWeight:"bold",
    fontSize:"1.2rem"
  }
}));
