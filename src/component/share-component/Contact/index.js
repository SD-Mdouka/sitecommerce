import React from "react";
import Contact from "./Contact";
import MyContact from "./MyContact";
import SocialMedia from "./SocialMedia";
import { Container } from "../../Style/ContactStyle";
import "./style.css";

const About = () => {
  return (
    <Container>
      <Contact />
      <MyContact />
      <SocialMedia />
    </Container>
  );
};

export default About;
