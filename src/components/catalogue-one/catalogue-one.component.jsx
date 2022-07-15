import React from "react";
import {
  CatalogueOneContainer,
  Row,
  Col1,
  InnerFlex,
  Categories,
  Col2,
  Card,
  H2,
  H1,
  Price,
  Button,
  CarouselContainer,
  ImageContainer,
  ImageSrc
} from "./catalogue-one.styles";
import CustomButton from "../custom-button/custom-button.component";
import { Carousel } from "react-bootstrap";
import ImageS from "../../assets/images/POTRAIT.jpg";
import Image2 from "../../assets/images/1.jpg";
import Image3 from "../../assets/images/2.jpg";
import Image4 from "../../assets/images/c.jpg";
import Image5 from "../../assets/images/d.jpg";

const CatalogueOne = () => (
  <CatalogueOneContainer>
    <Row>
      <Col1>
        <CarouselContainer>
          <Carousel controls={false} fade={true} indicators={false}>

            <Carousel.Item interval={2000}>
              <ImageContainer>
                <ImageSrc src={ImageS} alt="First slide" />
              </ImageContainer>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <ImageContainer>
                <ImageSrc src={Image2} alt="First slide" />
              </ImageContainer>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <ImageContainer>
                <ImageSrc src={Image3} alt="First slide" />
              </ImageContainer>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <ImageContainer>
                <ImageSrc src={Image4} alt="First slide" />
              </ImageContainer>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <ImageContainer>
                <ImageSrc src={Image5} alt="First slide" />
              </ImageContainer>
            </Carousel.Item>

          </Carousel>
        </CarouselContainer>
      </Col1>
      <Col2>
        <Card>
          <H2>cartegories</H2>
          <H1>
            women <br /> long knitted <br /> jacket
          </H1>
          <Price>$500</Price>
          <Button as={CustomButton}>enter</Button>
        </Card>
      </Col2>
    </Row>
  </CatalogueOneContainer>
);

export default CatalogueOne;
