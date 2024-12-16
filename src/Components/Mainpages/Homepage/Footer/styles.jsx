import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  footer_main: {
    backgroundColor: "#035CB4",
    height: "auto",
    paddingBottom: "20px",
  },
  footer_sub1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flexstart",
    // flexDirection:"column",
    padding: "50px 10px 50px 5px",
    color: "#ffffff",
    gap: "30px",
  },
  footer_logo_sec: {
    width: "18%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "4%",
  },
  footer_logo: {
    width: "30%",
    textAlign: "center",
  },
  footer_sub2: {
    backgroundColor: "#072747",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#ffffff",
  },

  footer_socialmedia: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  footer_whatsapp: {
    fill: "#25D366 !important",
  },
  footer_email: {
    fill: "#138BDE !important",
  },
  footer_facebook: {
    fill: "#1877F2 !important",
  },
  footer_instagram: {
    fill: "url(#instagram-gradient) !important",
  },
  footer_linkedin: {
    fill: "#0A66C2 !important",
  },
  footer_x: {
    fill: "#000000 !important",
  },
  footer_txt: {},
  headings: {
    paddingBottom: "10px",
    borderBottom: "2px solid #ffffff",
  },
}));
