import React from 'react';
import NewsletterDynamic from '../../../Elements/Newsletttermain/newslettermain';

const Newsletter = () => {
  const newsletterData = {
    content: "Stay ahead in the world of Data Science and AI ! Explore our blog for the latest updates, trends, and innovations shaping the tech industry. Don't miss out - to our Newsletter for regular insights and expert guidance.",
    blogLabel: "Visit our Blog",
    subscribeLabel: "Subscribe to our free Newsletter"
  };

  return <NewsletterDynamic {...newsletterData} />;
};

export default Newsletter;