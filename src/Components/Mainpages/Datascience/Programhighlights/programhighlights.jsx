import React from "react";
import ProgramHighlightsMain from "../../../Elements//Programhighlightsmain/program-highlights-main";

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
import Dsprogram from "../../../../Assets/dshigh.png"; // Replace with your actual hero image path

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
  const mainHeadline = `Stay Ahead in the
Data Revolution with
Gigaversity`;

  // Define main details with bold text support
  const mainDetails = [
    [
      { text: "Refined Curriculum with " },
      { text: "Industry-Aligned Modules", bold: true }
    ],
    [
      { text: "Premium " },
      { text: "Gemini Access", bold: true },
      { text: " Up to $30 for One Year" }
    ],
    [
      { text: "Gain Expertise in " },
      { text: "20+ Advanced Tools", bold: true },
      { text: " and Technologies" }
    ],
    [
      { text: "Build " },
      { text: "Gen AI Products", bold: true },
      { text: " from " },
      { text: "Scratch", bold: true }
    ],
    [
      { text: "Engage in " },
      { text: "10+", bold: true },
      { text: " Industry-Driven " },
      { text: "Case Studies", bold: true }
    ],
    [
      { text: "90% " },
      { text: "Job-Ready", bold: true },
      { text: " Product based " },
      { text: "portfolio", bold: true }
    ]
  ];

  // Define program highlights
  const programHighlights = [
    { icon: "Months", text: "9 Months Duration" },
    { icon: "Live", text: "1:1 Live Sessions" },
    { icon: "Demand", text: "In-Demand skills & tools" },
    { icon: "Build", text: "Build your own GEN AI Product" },
    { icon: "Pro", text: "Networking with professionals" },
    { icon: "Intern", text: "Internship Opportunity" },
    { icon: "Mock", text: "Unlimited Mock interviews" },
    { icon: "Aijob", text: "Al Job Assist" }
  ];

  return (
    <ProgramHighlightsMain
      mainHeadline={mainHeadline}
      mainDetails={mainDetails}
      programHighlights={programHighlights}
      iconComponents={iconComponents}
      heroImage={Dsprogram} // Pass the hero image dynamically
    />
  );
};

export default Programhighlights;