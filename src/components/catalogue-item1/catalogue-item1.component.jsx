import React from "react";
import {
  CatalogueItem1Container,
  Row,
  Col1,
  H1,
  P,
  ButtonT,
  Col2,
  ImageSrc,
} from "./catalogue-item1.styles";
import CustomButton from "../custom-button/custom-button.component";
import Image from "../../assets/images/a.jpg";

const CatalogueItem1 = () => (
  <CatalogueItem1Container>
    <Row>
      <Col1>
        <H1>Men</H1>
        <P>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Vero, saepe!
        </P>
        <ButtonT as={CustomButton}>enter</ButtonT>
      </Col1>
      <Col2>
        <ImageSrc src={Image} />
      </Col2>
    </Row>
  </CatalogueItem1Container>
);

export default CatalogueItem1;
