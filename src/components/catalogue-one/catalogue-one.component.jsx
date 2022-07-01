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
} from "./catalogue-one.styles";
import CustomButton from "../custom-button/custom-button.component";

const CatalogueOne = () => (
  <CatalogueOneContainer>
    <Row>
      <Col1>
        <InnerFlex>
          <Categories>mens</Categories>
          <hr style={{ width: "20%", background: "#000" }}/>
          <Categories>womens</Categories>
          <hr style={{ width: "20%" }}/>
          <Categories>jacket</Categories>
          <hr style={{ width: "20%" }}/>
          <Categories>hats</Categories>
          <hr style={{ width: "20%" }}/>
          <Categories>sneakers</Categories>
        </InnerFlex>
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
