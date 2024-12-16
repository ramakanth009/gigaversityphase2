import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  form_main: {
    backgroundColor: "#E1F0FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 40px 0px 0px",
    borderRadius: "40px",
    margin: "5px 40px",
  },
  form_button: {
    width: "250px",
    backgroundColor: "#1E90FF !important",
    color: "#ffffff !important",
    fontWeight: "bold",
    borderRadius: "40px 40px 0px 0px !important",
  },
  form_right: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "none !important",
    "$.MuiBox-root": {
      paddingBottom: "none",
    },
    // position:"relative",
    // bottom:"-1px"
    padding: "0px 80px 0px 50px",
  },
  form_left: {
    boxSizing: "border-box",
    width: "50%",
  },
  largest: {
    color: "#223f96",
  },
  smallest: {
    marginBottom: "20px !important",
  },
  left_heading: {
    fontWeight: "bold !important",
    marginBottom: "20px !important",
    // width: "450px",
    paddingRight: "100px",
  },
  image:{
    position:"relative",
    left:"90px"
  }
}));
