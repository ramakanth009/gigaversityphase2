import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  geminimain: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #E4F2FF 31%, #D0E8FF 100%) !important",
    textAlign: "center",
    borderRadius: "20px",
    margin: "20px 20px 20px 10px",
  },
  geminihead: {
    background: "rgba(146, 201, 255, 1)",
    textTransform: "uppercase !important",
    borderRadius: "20px 20px 0 0 !important",
    fontWeight: "bold !important",
    padding: "14px 0px",
  },
  geminicontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aibox1: {
    width: "45%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: "20px",
    padding: "30px 10px",
  },
  aibox2: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: "40px",
    gap: "30px",
    padding: "30px 10px",
    textAlign: "left",
  },
  geminipro: {
    fontSize: "2rem !important",
    fontWeight: "bold !important",
    textTransform: "uppercase",
  },
  geminigains: {
    lineHeight: "30px !important",
    textAlign: "left",
    // fontWeight: "bold !important",
    fontSize:"1.2rem !important",
  },
  geminipoints:{
    fontSize:"1.5rem !important",
    textTransform:"capitalize",
  },
  geminipointsbold: {
    fontWeight: "bold",
  },
}));
