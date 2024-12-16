import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  feedbackmain: { margin: "10px 0 30px 0" },
  feedbackhead: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold !important",
    marginBottom: "30px !important",
  },
  feedboxes: {
    // padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px 30px",
    justifyContent: "center",
    alignItems: "center",
  },
  feedbox1: {
    background: "#D0E8FF",
    width: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px",
    borderRadius: "20px",
  },
  feedbox2: {
    background: "#9DCFFF",
    width: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px",
    borderRadius: "20px",
  },
  feedwho: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  feedperson: {
    fontWeight: "bold !important",
  },
  feedreview: {
    padding: "20px 40px",
  },
}));
