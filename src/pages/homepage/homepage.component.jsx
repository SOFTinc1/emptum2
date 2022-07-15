import React from "react";
import { HomepageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.component";
import HomeBanner from "../../components/home-banner/home-banner.component";
import HomepageBanner from "../../components/hompage-banner/homepage-banner.component";
import HomepageBanner2 from "../../components/hompage-banner2/homepage-banner2.component";
import CatalogueOne from "../../components/catalogue-one/catalogue-one.component";
import CatalogueOneContd from "../../components/catalogue-one-contd/catalogue-one-contd.component";
import CatalogueOneContd2 from "../../components/catalogue-one-contd-2/catalogue-one-contd.component";
import CatalogueOneNew from "../../components/catalogue-one-new/catalogue-one-contd.component";



const Homepage = () => (
  <HomepageContainer>
    <HomeBanner />
    <Directory />
    {/* <HomepageBanner /> */}
    {/* <HomepageBanner2 />  */}
    <CatalogueOne />
    <CatalogueOneContd />
    <CatalogueOneContd2 />
    <CatalogueOneNew />
  </HomepageContainer>
);

export default Homepage;
