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
} from "./catalogue-item2.styles";
import CustomButton from "../custom-button/custom-button.component";
import Image from "../../assets/images/b.jpg";

const CatalogueItem2 = () => (
  <CatalogueItem1Container>
    <Row>
      <Col1>
        <ImageSrc src={Image} />
      </Col1>
      <Col2>
        <H1>women</H1>
        <P>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Vero, saepe!
        </P>
        <ButtonT as={CustomButton}>enter</ButtonT>
      </Col2>
    </Row>
  </CatalogueItem1Container>
);

export default CatalogueItem2;
