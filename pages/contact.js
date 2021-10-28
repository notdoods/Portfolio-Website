import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";

export default function contact() {
  require("dotenv").config();
  return (
    <ContainerBlock>
      <Contact />
    </ContainerBlock>
  );
}
