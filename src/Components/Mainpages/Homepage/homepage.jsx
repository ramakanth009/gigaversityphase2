import React from "react";
import Hero from "../Homepage/Hero/hero";
import Stillconfused from "../Homepage/Stillconfused/stillconfused";
import Form from "../Homepage/Form/form";
import Chatwithus from "../Homepage/Chatwithus/chatwithus";
import Path from "../Homepage/Path/path";
import Instructors from "../Homepage/Instructors/instructors";
import Certificates from "../../Elements/Certificates/Certificates";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Instructors />
      <Certificates />
      <Path />
      <Chatwithus />
      <Form />
      <Stillconfused />
    </div>
  );
};

export default Homepage;
