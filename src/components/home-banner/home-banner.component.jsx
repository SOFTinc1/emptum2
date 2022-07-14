import React from "react";
import {
  HomeBannerContainer,
  Row,
  Col1,
  Heading,
  Span,
  Span1,
  Span2,
  Price,
  Par,
  CustomButtonDiv,
  Col2,
  Image,
} from "./home-banner.styles";
import Image1 from "../../assets/images/Frame4.png";

const HomeBanner = () => (
  <HomeBannerContainer>
    <Row>
      <Col1>
        <Heading>
          amazing <br /> <Span>products</Span> <Span1>from</Span1><Span2>manufacturers</Span2>
        </Heading>
        <Price>
          29.99<sup>$</sup>
        </Price>
        <Par>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
          repudiandae?
        </Par>
        <CustomButtonDiv>enter</CustomButtonDiv>
      </Col1>
      <Col2>
        <Image src={Image1} />
      </Col2>
    </Row>
  </HomeBannerContainer>
);

export default HomeBanner;
