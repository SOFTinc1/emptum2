import React from "react";
import {
  HomepageBanner2Container,
  Row,
  ImageSrc,
  H1,
  Col1,
  Col2,
  P
} from "./homepage-banner.styles";
import Image1 from "../../assets/images/b.jpg";
import Slide from "react-reveal/Slide";
// import SearchBox from "../search-box/search-box.components";

const HomepageBanner = () => (
  <HomepageBanner2Container>
    <Row>
      <Slide left>
        <Col1>
          <H1>unleash the ravishing within-g</H1>
          {/* <SearchBox /> */}
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti minus libero nostrum autem accusamus omnis fugit recusandae iste eaque.</P>
        </Col1>
      </Slide>
      <Slide right>
        <Col2>
          <ImageSrc src={Image1} />
        </Col2>
      </Slide>
    </Row>
  </HomepageBanner2Container>
);

export default HomepageBanner;
