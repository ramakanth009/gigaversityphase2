import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  campusmain: {
    margin: "20px 80px",
  },
  campustitle: {
    textAlign: "center",
    fontWeight: "bold !important",
  },
  campuscontent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // textAlign: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px 150px",
  },
  cbold: {
    fontWeight: "bold",
    color: "#035CB4!important",
  },
  campustext: {
    fontWeight: "bold !important",
    fontSize:"1.5rem !important"
  },
}));
