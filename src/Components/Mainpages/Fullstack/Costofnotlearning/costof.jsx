import React from "react";
import Costofmain from "../../../Elements//Costofmain/cost-of-main";

// Import SVG icons
import Icon24 from "../../../../Assets/icon24.svg";
import Icon25 from "../../../../Assets/icon25.svg";
import Icon26 from "../../../../Assets/icon26.svg";

const Costof = () => {
  // Define headline
  const headline = `The Cost of Not Learning Data 
Science with Gigaversity`;

  // Define cost sections with support for bold text
  const costSections = [
    {
      icon: Icon24,
      text: [
        { content: "You're stuck with generic programs ", bold: true },
        // { content: "outdated learning resources", bold: true },
        {
          content:
            "that don’t cover the latest technologies. We focus on building practical, real-world applications to ensure you stay ahead in the rapidly changing web development landscape.",
          bold: false,
        },
      ],
    },
    {
      icon: Icon25,
      text: [
        { content: "You're missing out on the chance to build ", bold: true },
        // { content: "generative AI tools.", bold: true },
        {
          content:
            "scalable, dynamic applications. While many courses offer basic knowledge, we provide hands-on experience with real, deployable projects that employers value.",
          bold: false,
        },
      ],
    },
    {
      icon: Icon26,
      text: [
        { content: "You're not gaining the full spectrum ", bold: true },
        // { content: "competitive edge", bold: true },
        {
          content:
            "of skills needed for modern web development. Our curriculum ensures you master both front-end and back-end technologies to meet industry demands and secure high-demand roles.",
          bold: false,
        },
      ],
    },
  ];

  return <Costofmain headline={headline} costSections={costSections} />;
};

export default Costof;
