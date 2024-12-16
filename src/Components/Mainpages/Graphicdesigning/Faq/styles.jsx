import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  faqmain: {
    margin: "20px 50px",
    borderRadius: "0px 0px 20px 20px",
  },
  faqbox: {},
  question: {
    boxShadow: "0px 4px 9.7px 5px #0000001A inset",
    "&.Mui-expanded": {
      backgroundColor: "#9DCCFF80 !important",
      marginBottom: "5px",
    },
  },
  arrow: {
    "&.MuiSvgIcon-root": {
      fontSize: "3rem !important",
    },
    "&.Mui-expanded": {
      color: "#0079FC !important",
    },
  },
  answer: {
    background: "#E2F0FF80",
    borderRadius: "0px 0px 20px 20px",
    border: "none !important",
    boxShadow: "0px 4px 9.7px 5px #0000001A inset !important", // Custom shadow
    "&.MuiPaper-root": {
      boxShadow: "none !important", // Remove MUI Paper shadow
    },
    "&.css-1808mag-MuiPaper-root-MuiAccordion-root": {
      boxShadow: "none !important", // Target specific Paper class
    },
    "&:root": {
      "--Paper-shadow": "none", // Neutralize the custom Paper shadow variable
    },
  },
}));
