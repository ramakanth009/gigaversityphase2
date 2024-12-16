import React from "react";
import { Box } from "@mui/material";
import Hero from "../Datascience/Hero/hero";
import Programhighlights from "../Datascience/Programhighlights/programhighlights";
import Hiringpartners from "../../Elements/Hiringpartners/hiringpartners";
import Costof from "../Datascience/Costofnotlearning/costof";
// import Background from "../Assets/background-pattern.svg";
import Gemini from "../Datascience/Gemini/gemini";
import Toolscovered from "../Datascience/Toolscovered/toolscovered";
import Newsletter from "../Datascience/Newsletter/newsletter";
import Curriculam from "../Datascience/Curriculam/curriculam";
import Whatyoubuild from "../Datascience/Whatyoubuild/whatyoubuild";
import Casestudies from "../Datascience/Casestudies/casestudies";
import Mentors from "../Datascience/Mentors/mentors";
import Jobs from "../Datascience/Jobs/jobs";
import Certificates from "../../Elements/Certificates/Certificates";
import Feedback from "../Datascience/Feedback/feedback";
import Fee from "../Datascience/Fee/fee";
import Faq from "../Datascience/Faq/faq";
import Campus from "../Datascience/Campus/campus";
import Financial from "../../Elements/Fiancialmain/financial";

const Datascience = () => {
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
      <Curriculam />
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

export default Datascience;
