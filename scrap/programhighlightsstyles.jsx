import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  highlightmain: {
    background:
      "radial-gradient(50% 50% at 50% 50%, #E4F2FF 31%, #D0E8FF 100%)",
    margin: "20px 20px 20px 10px",
    borderRadius: "50px",
    padding: "20px",
    display: "flex",
    gap: "20px",
  },
  highlightone: {
    height: "auto",
    width: "30vw",
    backgroundColor: "#1e90ff !important",
    borderRadius: "20px",
  },
  highlighttwo: {
    width: "35vw",
  },
  highlighttwohead: {
    color: "rgba(0, 122, 241, 1) !important",
    fontWeight: "bold !important",
    fontSize: "1.8rem !important",
    textTransform: "uppercase",
    width: "90vh !important",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  twoheaddetaillist: {
    fontWeight: 400,
    fontSize: "1.3rem",
    // color: "#fff",
    // lineHeight: "60px",
    display:"flex",
    flexDirection:"column",
    gap:"48px"
  },
  highlightthree: {
    width: "35vw",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
  },
  // threehead: {
  //   boxSizing:"none",
  //   color: "#fff !important",
  //   backgroundColor: "#1e90ff",
  //   padding:"10px 200px",
  //   textAlign:"center",
  //   fontSize:"1.4rem !important",
  //   borderRadius:"20px",
  //   margin:"20px 0px !important",
  //   overflow:"visible !important"
  // },
  threehead: {
    boxSizing: 'none !important',
    color: '#fff !important',
    backgroundColor: '#1e90ff',
    padding: '8px',
    textAlign: 'center',
    fontSize: '1.4rem !important',
    borderRadius: '10px 10px 10px 10px',
    margin: '10px 0 !important',
    overflow: 'visible !important',
    width: '98%',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    textTransform:"uppercase",
    fontWeight:"bold !important"
  },
  threeheaddetail:{

  },
  threeheaddetaillist:{
    listStyle:"none"
  },
  thicon:{
    height:"40px",
    padding:"8px 10px !important"
  },
  thlist:{
    display:"flex",
    gap:"20px",
    alignItems:"center",
    fontSize:"1.3rem",
  },
  programbold:{
    fontWeight:"bold",
  },
  

}));
