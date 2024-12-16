import React from "react";
import ProgramHighlightsMain from "../../../Elements/Programhighlightsmain/program-highlights-main";

// Import SVG icons
import Months from "../../../../Assets/9months.svg";
import Live from "../../../../Assets/live.svg";
import Demand from "../../../../Assets/demand.svg";
import Build from "../../../../Assets/build.svg";
import Pro from "../../../../Assets/pro.svg";
import Intern from "../../../../Assets/internship.svg";
import Mock from "../../../../Assets/mock.svg";
import Aijob from "../../../../Assets/aijob.svg";
// Import hero image
import Dmprogram from "../../../../Assets/dmhigh.png"; // Replace with your actual hero image path

const Programhighlights = () => {
  // Define icon components
  const iconComponents = {
    Months,
    Live,
    Demand,
    Build,
    Pro,
    Intern,
    Mock,
    Aijob
  };

  // Define main headline
  const mainHeadline = `Master the Art of Digital Marketing with Gigaversity`;

  // Define main details with bold text support
  const mainDetails = [
    [
      { text: "Refined Curriculum with Industry-Focused Modules" },
      // { text: "Industry-Aligned Modules", bold: true }
    ],
    [
      { text: "Hands-on Expertise in 15+ Advanced Marketing   Platforms " },
      // { text: "Gemini Access", bold: true },
      // { text: " Up to $30 for One Year" }
    ],
    [
      { text: "Create AI-Powered Marketing Campaigns from Scratch" },
      // { text: "20+ Advanced Tools", bold: true },
      // { text: " and Technologies" }
    ],
    [
      { text: "Work on 10+ Real-World Marketing Case Studies" },
      // { text: "Gen AI Products", bold: true },
      // { text: " from " },
      // { text: "Scratch", bold: true }
    ],
    [
      { text: "90% Job-Ready Portfolio Showcasing Real Projects" },
      // { text: "10+", bold: true },
      // { text: " Industry-Driven " },
      // { text: "Case Studies", bold: true }
    ],
    // [
    //   { text: "Showcase your skills with a job-ready portfolio of 2 launched projects." },
    //   // { text: "Job-Ready", bold: true },
    //   // { text: " Product based " },
    //   // { text: "portfolio", bold: true }
    // ]
  ];

  // Define program highlights
  const programHighlights = [
    { icon: "Months", text: "9 Months Duration" },
    { icon: "Live", text: "10+ Case Studies" },
    { icon: "Demand", text: "8+ Live Projects" },
    { icon: "Build", text: "5 Certifications" },
    { icon: "Pro", text: "100% Portfolio Building" },
    { icon: "Intern", text: "AI-Powered Curriculum" },
    // { icon: "Mock", text: "Unlimited Mock interviews" },
    // { icon: "Aijob", text: "Al Job Assist" }
  ];

  return (
    <ProgramHighlightsMain
      mainHeadline={mainHeadline}
      mainDetails={mainDetails}
      programHighlights={programHighlights}
      iconComponents={iconComponents}
      heroImage={Dmprogram} // Pass the hero image dynamically
    />
  );
};

export default Programhighlights;