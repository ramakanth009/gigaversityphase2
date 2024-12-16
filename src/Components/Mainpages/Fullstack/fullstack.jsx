import React from "react";
import { Box } from "@mui/material";
import Hero from "../Fullstack/Hero/hero";
import Programhighlights from "../Fullstack/Programhighlights/programhighlights";
import Hiringpartners from "../../Elements/Hiringpartners/hiringpartners";
import Costof from "../Fullstack/Costofnotlearning/costof";
// import Background from "../Assets/background-pattern.svg";
import Gemini from "../Fullstack/Gemini/gemini";
import Toolscovered from "../Fullstack/Toolscovered/toolscovered";
import Newsletter from "../Fullstack/Newsletter/newsletter";
// import Curriculam from "../Fullstack/Curriculam/curriculam";
import Whatyoubuild from "../Fullstack/Whatyoubuild/whatyoubuild";
import Casestudies from "../Fullstack/Casestudies/casestudies";
import Mentors from "../Fullstack/Mentors/mentors";
import Jobs from "../Fullstack/Jobs/jobs";
import Certificates from "../../Elements/Certificates/Certificates";
import Feedback from "../Fullstack/Feedback/feedback";
import Fee from "../Fullstack/Fee/fee";
import Faq from "../Datascience/Faq/faq";
import Campus from "../Fullstack/Campus/campus";
import Financial from "../../Elements/Fiancialmain/financial";

const Fullstack = () => {
  return (
    <Box
    // sx={{ backgroundImage: `url(${Background})` }}
    >
      <Hero />
      <Programhighlights />
      <Hiringpartners />
      <Costof />
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

export default Fullstack;
