import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import Details from "../../components/details/details.component";



const Homepage = () => (
  <HomepageContainer>
    <Banner />
    <Directory />
    <Details />
  </HomepageContainer>
);

export default Homepage;
