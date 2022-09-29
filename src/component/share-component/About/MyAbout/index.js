import React from "react";
import {
  AboutInfo,
  AboutSection,
  TitleSection,
  TitleSpan,
  Directly,
  InfoDesc,
  LinkDesc,
} from "./style";
import { Container } from "../../../Style/ContactStyle";

// funcion component
const About = () => {
  return (
    <AboutSection>
      <Container>
        <AboutInfo>
          <TitleSection>
            <TitleSpan>
              M.A. GLOBAL CONSULTING - THE LEGAL 500 RANKINGS
            </TitleSpan>
          </TitleSection>
          <Directly>About Director</Directly>
          <LinkDesc src="https://www.legal500.com/firms/235494-ma-global-consulting/234938-casablanca-morocco/">
            M.A. Global Consulting
          </LinkDesc>
          <InfoDesc>
            works in partnership with international tax consultancy Andersen
            Global, bringing to bear the strength of its large tax team to
            handle cross-border matters for businesses with interests in
            Morocco. Managing partner Mehdi El Attar and specialist tax partner
            Manar Fadriq have in-depth knowledge of local and international tax
            laws.
          </InfoDesc>
        </AboutInfo>
      </Container>
    </AboutSection>
  );
};

export default About;
