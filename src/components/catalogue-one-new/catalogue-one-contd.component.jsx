import React from "react";
import {
  CatalogueOneContdContainer,
  H1,
  Row,
  Row2,
  Col1,
  Col2,
  Col3,
  Col4,
  Col5,
  Col6,
  Flex,
  H2,
  P,
  P2,
  // ImagesSrc,
} from "./catalogue-one-contd.styles";
import Slide from "react-reveal/Slide";

const CatalogueOneNew = () => (
  <CatalogueOneContdContainer>
    <Slide bottom>
      <H1>discover your beautiful, choose your preffered fashion accessory</H1>
    </Slide>
    <Slide top>
      <Row>
        <Col1>
          <H2>mens</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            recusandae.
          </P>
        </Col1>
        <Col2>
          <H2>mens</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            recusandae.
          </P>
        </Col2>
        <Col3>
          <H2>mens</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            recusandae.
          </P>
        </Col3>
        <Col4>{/* <ImagesSrc src={Image1} /> */}</Col4>
        <Flex>
          <Col5>
            <H2>mens</H2>
            <P2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              recusandae.
            </P2>
          </Col5>
          <Col6>
            <H2>mens</H2>
            <P2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              recusandae.
            </P2>
          </Col6>
        </Flex>
      </Row>
    </Slide>

    {/* <Col1>
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
      </Col4> */}
  </CatalogueOneContdContainer>
);

export default CatalogueOneNew;
