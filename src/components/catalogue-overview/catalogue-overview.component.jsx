import React from "react";
import {
  CatalogueOverviewContainer,
  UpperRow,
  Col1,
  H1,
  Span,
  Span2,
  H2,
  LowerRow,
  Col3,
  // ButtonCircle,
  Col4,
  ImageSrc2,
  Move
} from "./catalogue-overview.styles";
// import Button from "../button/button.component";
import CatalogueItem1 from "../catalogue-item1/catalogue-item1.component";
import CatalogueItem2 from "../catalogue-item2/catalogue-item2.component";
import Image1 from "../../assets/images/POTRAIT.jpg";

const CatalogueOverview = () => (
  <CatalogueOverviewContainer>
    <UpperRow>
      <Col1>
        <H1>newest</H1>
        <Span>all season collection</Span>
      </Col1>
      <Col1>
        <Span2>explore all our <br /> catalogue</Span2>
        <H2>
          all <br /> catalogue
        </H2>
      </Col1>
    </UpperRow>
    <LowerRow>
        <Col3>
          {/* <ButtonCircle as={Button} /> */}
          <ImageSrc2 src={Image1} />
        </Col3>
        <Col4>
          <CatalogueItem1 />
          <Move as={CatalogueItem2} />
        </Col4>
    </LowerRow>
  </CatalogueOverviewContainer>
);

export default CatalogueOverview;
