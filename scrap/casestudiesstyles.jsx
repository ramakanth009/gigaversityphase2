import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  casemain: {
    marginBottom: "30px",
  },
  casetitle: {
    fontWeight: "bold !important",
    textTransform: "uppercase !important",
    textAlign: "center",
    margin: "30px 0 !important",
  },
  caseset: {
    margin: "40px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  casebox: {
    textTransform: "uppercase !important",
    backgroundColor: "#ffffff",
    width: "25%",
    height: "350px",
    border: "1px solid #000",
    flexDirection: "column",
    borderRadius: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    "&:hover": {
        background: "#D0E8FF",
        border: "1px solid #D3EAFF",
    },
  },
  caseboxtitle: {
    fontWeight: "bold !important",
  },
}));
