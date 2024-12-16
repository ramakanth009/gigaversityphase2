import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  path_main: {
    display: "flex",
    flexDirection:"column",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    margin:"40px 0px",
    "& .MuiTypography-root": {
      fontFamily: "var(--font-primary)",
      textAlign:"center"
    },
    "& .MuiTypography-body1": {
      fontFamily: "var(--font-primary)",
    },
  },
  path_boxes: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    margin:"20px 0px"
  },
  path_box: {
    maxWidth:"220px",
    minHeight:"90px",
    padding: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E8FF",
    borderRadius:"20px"
  },
}));
