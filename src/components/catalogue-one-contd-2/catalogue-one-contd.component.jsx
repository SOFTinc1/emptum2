import React from "react";
import {
  CatalogueOneContdContainer,
  Row,
  Col4,
  Col5,
  Col6,
  Flex,
  H2,
  P,
  ImagesSrc,
} from "./catalogue-one-contd.styles";
import Image1 from "../../assets/images/b.jpg";
import Slide from "react-reveal/Slide";
// import CustomButton from "../custom-button/custom-button.component";
// import Image2 from "../../assets/images/c.jpg";
// import Image3 from "../../assets/images/POTRAIT.jpg";
// import Image4 from "../../assets/images/2.jpg";

const CatalogueOneContd2 = () => (
  <CatalogueOneContdContainer>
    <Slide right>
      <Row>
        <Col4>
          <ImagesSrc src={Image1} />
        </Col4>
        <Flex>
          <Col5>
            <H2>hats</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              recusandae.
            </P>
          </Col5>
          <Col6>
            <H2>sneakers</H2>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              recusandae.
            </P>
          </Col6>
        </Flex>
      </Row>
    </Slide>
  </CatalogueOneContdContainer>
);

export default CatalogueOneContd2;
