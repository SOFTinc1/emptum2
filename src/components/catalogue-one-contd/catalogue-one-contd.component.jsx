import React from "react";
import {
  CatalogueOneContdContainer,
  H1,
  Row,
  Col1,
  Col2,
  Col3,
  H2,
  P,
  // ImagesSrc,
} from "./catalogue-one-contd.styles";
import Slide from "react-reveal/Slide";
// import Image1 from "../../assets/images/b.jpg";
// import CustomButton from "../custom-button/custom-button.component";
// import Image2 from "../../assets/images/c.jpg";
// import Image3 from "../../assets/images/POTRAIT.jpg";
// import Image4 from "../../assets/images/2.jpg";

const CatalogueOneContd = () => (
  <CatalogueOneContdContainer>
    <Slide left>
    <H1>
      here is your one stop shopping store to get all your fashion items,
      without having to compromise on the quality.
    </H1>
    <Row>
      <Col1>
        <H2>mens</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          recusandae.
        </P>
      </Col1>
      <Col2>
        <H2>womens</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          recusandae.
        </P>
      </Col2>
      <Col3>
        <H2>jackets</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          recusandae.
        </P>
      </Col3>
    </Row>
    </Slide>
  </CatalogueOneContdContainer>
);

export default CatalogueOneContd;
