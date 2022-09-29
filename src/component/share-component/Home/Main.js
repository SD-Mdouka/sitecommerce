import React from "react";
import { Titel, Section, Img, ImgMoon } from "../../Style/StyleHome";

const Main = () => {
  return (
    <>
      <Section className="main">
        <Img src="./image/stars1.png" id="stars1" />
        <Titel className="Shop">Shoping</Titel>
        <ImgMoon src="./image/moon2.png" id="moon2" />
        <Img src="./image/mountains3.png" id="mountains3" />
        <Img src="./image/mountains4.png" id="mountains4" />
        <Img src="./image/river5.png" id="river5" />
        <Img src="./image/boat6.png" id="boat6" />
        <Img src="./image/mountains7.png" id="mountains3" />
      </Section>
    </>
  );
};

export default Main;
