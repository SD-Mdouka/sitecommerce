import React from "react";
import Profile from "./Profile";
import MyAbout from "./MyAbout";
import Skilles from "./Skilles";
import { Container } from "../../Style/ContactStyle";

const About = () => {
  return (
    <Container>
      <Profile />
      <MyAbout />
      <Skilles />
    </Container>
  );
};

export default About;
