import React from "react";
import {
  CatalogueOneContdContainer,
  H1,
  Row,
  Col1,
  Col2,
  Col3,
  Col4,
  Img1,
  Img2,
  Img3,
  Img4,
  Title,
  Button,
} from "./catalogue-one-contd.styles";
import CustomButton from "../custom-button/custom-button.component";
import Image1 from "../../assets/images/d.jpg";
import Image2 from "../../assets/images/c.jpg";
import Image3 from "../../assets/images/POTRAIT.jpg";
import Image4 from "../../assets/images/2.jpg";

const CatalogueOneContd = () => (
  <CatalogueOneContdContainer>
    <H1>
      here is your one stop shopping store to get all your fashion items,
      without having to compromise on the quality.
    </H1>
    <Row>
      <Col1>
        <Img1 src={Image1} />
        <Title>womens</Title>
        <Button as={CustomButton}>enter</Button>
      </Col1>
      <Col2>
        <Title>jackets</Title>
        <Button as={CustomButton}>enter</Button>
        <Img2 src={Image2} />
      </Col2>
      <Col3>
        <Img3 src={Image3} />
        <Title>hats</Title>
        <Button as={CustomButton}>enter</Button>
      </Col3>
      <Col4>
        <Title>sneakers</Title>
        <Button as={CustomButton}>enter</Button>
        <Img4 src={Image4} />
      </Col4>
    </Row>
  </CatalogueOneContdContainer>
);

export default CatalogueOneContd;
