import React from "react";
import {
  HomepageBanner2Container,
  H1,
  Col,
} from "./homepage-banner2.styles";
import Slide from "react-reveal/Slide";

const HomepageBanner2 = () => (
  <HomepageBanner2Container>
    <Slide left>
      <Col id="scroll-container">
        <H1>move foward with your ravishness</H1>
      </Col>
    </Slide>
  </HomepageBanner2Container>
)
export default HomepageBanner2;
