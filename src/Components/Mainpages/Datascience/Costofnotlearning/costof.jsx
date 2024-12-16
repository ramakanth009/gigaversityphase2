import React from "react";
import Costofmain from "../../../Elements//Costofmain/cost-of-main";

// Import SVG icons
import Icon21 from "../../../../Assets/icon21.svg";
import Icon22 from "../../../../Assets/icon22.svg";
import Icon23 from "../../../../Assets/icon23.svg";

const Costof = () => {
  // Define headline
  const headline = `The Cost of Not Learning Data 
Science with Gigaversity`;

  // Define cost sections with support for bold text
  const costSections = [
    {
      icon: Icon21,
      text: [
        { content: "You're stuck with ", bold: false },
        { content: "outdated learning resources", bold: true },
        { content: " that don't reflect current industry trends. Our program offers hands-on experience with scalable, real-world projects, ensuring you stay ahead of the curve and are ready to tackle the most demanding challenges in the tech landscape", bold: false }
      ]
    },
    {
      icon: Icon22,
      text: [
        { content: "You're missing out on learning with cutting-edge ", bold: false },
        { content: "generative AI tools.", bold: true },
        { content: " With exclusive access to top-tier AI platforms, you'll gain hands-on experience, enhancing your projects and developing advanced, industry-relevant skills", bold: false }
      ]
    },
    {
      icon: Icon23,
      text: [
        { content: "You're not getting the ", bold: false },
        { content: "competitive edge", bold: true },
        { content: " that comes from professional exposure. Qualified candidates advance to our campus immersion, working directly with industry experts to hone their skills and develop the expertise needed to become proficient data scientists.", bold: false }
      ]
    }
  ];

  return (
    <Costofmain
      headline={headline}
      costSections={costSections}
    />
  );
};

export default Costof;