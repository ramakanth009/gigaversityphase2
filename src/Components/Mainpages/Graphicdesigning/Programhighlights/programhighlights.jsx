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
import Gdprogram from "../../../../Assets/gdhigh.png"; // Replace with your actual hero image path

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
  const mainHeadline = `Master the Art of Visual Storytelling with Gigaversity`;

  // Define main details with bold text support
  const mainDetails = [
    [
      { text: "Refined Curriculum with Industry-Aligned Design Modules" },
      // { text: "Industry-Aligned Modules", bold: true }
    ],
    [
      { text: "Premium Access to Design Resources Worth $50 for One Year" },
      // { text: "Gemini Access", bold: true },
      // { text: " Up to $30 for One Year" }
    ],
    [
      { text: "Master 15+ Industry-Standard Tools and Technologies, including Adobe Suite & Figma" },
      // { text: "20+ Advanced Tools", bold: true },
      // { text: " and Technologies" }
    ],
    [
      { text: "Create End-to-End Brand Campaigns and Visual Products" },
      // { text: "Gen AI Products", bold: true },
      // { text: " from " },
      // { text: "Scratch", bold: true }
    ],
    [
      { text: "Engage in 10+ Real-World Design Projects and Case Studies" },
      // { text: "10+", bold: true },
      // { text: " Industry-Driven " },
      // { text: "Case Studies", bold: true }
    ],
    [
      { text: "90% Job-Ready Portfolio Showcasing Creative Expertise" },
      // { text: "Job-Ready", bold: true },
      // { text: " Product based " },
      // { text: "portfolio", bold: true }
    ]
  ];

  // Define program highlights
  const programHighlights = [
    { icon: "Months", text: "6 Months Duration" },
    { icon: "Live", text: "1:1 Live Mentorship" },
    { icon: "Demand", text: "Master Design Tools" },
    { icon: "Build", text: "Create Visual Projects" },
    { icon: "Pro", text: "Network with Professionals" },
    { icon: "Intern", text: "Guaranteed Internship Opportunity" },
    { icon: "Mock", text: "Unlimited Mock interviews" },
    { icon: "Aijob", text: "Al Job Assist" }
  ];

  return (
    <ProgramHighlightsMain
      mainHeadline={mainHeadline}
      mainDetails={mainDetails}
      programHighlights={programHighlights}
      iconComponents={iconComponents}
      heroImage={Gdprogram} // Pass the hero image dynamically
    />
  );
};

export default Programhighlights;