import React from "react";
// import {
//   HomepageBanner2Container,
//   BackgroundOverlay,
//   H1,
//   Scroll,
//   IconScroll,
// } from "./homepage-banner.styles";
import {
  HomepageBanner2Container,
  Row,
  ImageSrc,
  ImageMobile,
  InnerRow,
  H1,
  InnerRow2,
  Flex,
  SearchCont,
  ImageSrc2,
} from "./homepage-banner.styles";
import CustomButton from "../custom-button/custom-button.component";
import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Slide from "react-reveal/Slide";
import SearchBox from "../search-box/search-box.components";

// const HomepageBanner = () => (
//   <HomepageBanner2Container>
//     <BackgroundOverlay>
//       <Slide top>
//         <H1>
//           amazing deals <br /> from <br /> manufacturer
//         </H1>
//       </Slide>
//       <Slide right>
//         <SearchBox />
//       </Slide>
//       <Slide bottom>
//         <Scroll align="center">
//           <IconScroll></IconScroll>
//         </Scroll>
//       </Slide>
//     </BackgroundOverlay>
//   </HomepageBanner2Container>
// );

const HomepageBanner = () => (
  <HomepageBanner2Container>
    <Row>
      <Slide left>
        <ImageSrc src={Image1} />
        <ImageMobile src={Image2} />
      </Slide>
      <InnerRow>
        <Slide top>
          <H1>amazing deals from manufacturer</H1>
        </Slide>
        <InnerRow2>
          <Slide bottom>
            <Flex>
              <SearchCont as={SearchBox} />
            </Flex>
          </Slide>
          <Slide right>
            <ImageSrc2 src={Image2} />
          </Slide>
        </InnerRow2>
      </InnerRow>
    </Row>
  </HomepageBanner2Container>
);

export default HomepageBanner;
