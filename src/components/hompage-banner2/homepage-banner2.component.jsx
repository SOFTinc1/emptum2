import React from "react";
// import "./homepage-banner2.styles.scss";
import { HomepageBanner2Container, BackgroundOverlay, H1, Scroll, IconScroll } from "./homepage-banner2.styles";
import SearchBox from "../search-box/search-box.components";

const HomepageBanner2 = () => (
  <HomepageBanner2Container>
    <BackgroundOverlay>
      <H1>
        amazing deals <br /> from <br /> manufacturer
      </H1>
      <SearchBox />
      <Scroll align="center">
        <IconScroll></IconScroll>
      </Scroll>
    </BackgroundOverlay>
  </HomepageBanner2Container>
);

export default HomepageBanner2;
