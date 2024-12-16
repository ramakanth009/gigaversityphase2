import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    wtbuildhead:{
        textAlign:"center",
        textTransform:"uppercase",
        fontWeight:"bold !important"
    },
    wtbuildbox:{
        background: "rgba(171, 213, 255, 0.80)",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        gap:"50px",
        // width:"800px",
        borderRadius:"55px",
        margin:"20px 50px",
        padding:"20px 40px"
    },
    wtbuildcontent:{
        display:"flex",
        flexDirection:"column",
        gap:"15px"
    },
    wtbuildcthead:{
        fontWeight:"bold !important",
        textTransform:"uppercase",
        letterSpacing:"1px !important",
    },
    wtbuildctdata:{
        fontWeight:"600 !important",
        textTransform:"uppercase",
        letterSpacing:"1px !important",
    }

}))