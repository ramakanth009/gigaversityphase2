import React from "react";
import { Box } from "@mui/material";
import Hero from "./Hero/hero";
import Programhighlights from "./Programhighlights/programhighlights";
import Hiringpartners from "../../Elements/Hiringpartners/hiringpartners";
import Costof from "./Costofnotlearning/costof";
// import Background from "../Assets/background-pattern.svg";
import Gemini from "./Gemini/gemini";
import Toolscovered from "./Toolscovered/toolscovered";
import Newsletter from "./Newsletter/newsletter";
// import Curriculam from "../Digitalmarketing/Curriculam/curriculam";
import Whatyoubuild from "./Whatyoubuild/whatyoubuild";
import Casestudies from "./Casestudies/casestudies";
import Mentors from "./Mentors/mentors";
import Jobs from "./Jobs/jobs";
import Certificates from "../../Elements/Certificates/Certificates";
import Feedback from "./Feedback/feedback";
import Fee from "./Fee/fee";
import Faq from "./Faq/faq";
import Campus from "./Campus/campus";
import Financial from "../../Elements/Fiancialmain/financial";

const Digitalmarketing = () => {
  return (
    <Box
    // sx={{ backgroundImage: `url(${Background})` }}
    >
      <Hero />
      <Programhighlights />
      <Hiringpartners />
      {/* <Costof /> */}
      <Gemini />
      <Toolscovered />
      <Newsletter />
      {/* <Curriculam /> */}
      <Campus />
      <Whatyoubuild />
      <Casestudies />
      <Mentors />
      <Jobs />
      <Certificates />
      <Feedback />
      <Fee />
      <Financial />
      <Faq />
    </Box>
  );
};

export default Digitalmarketing;
