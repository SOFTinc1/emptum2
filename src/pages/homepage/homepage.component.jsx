import React from "react";
import "./homepage.styles.scss";
import MyHeader from "../../components/MyHeader/MyHeader.component";
import Directory from "../../components/directory/directory.component";
import HomepageBanner from "../../components/hompage-banner/homepage-banner.component";
import CatalogueOverview from "../../components/catalogue-overview/catalogue-overview.component";
import CatalogueOne from "../../components/catalogue-one/catalogue-one.component";
import CatalogueOneContd from "../../components/catalogue-one-contd/catalogue-one-contd.component";


const Homepage = () => (
  <div className="homepage">
    <MyHeader />
    <HomepageBanner />
    <Directory />
    <CatalogueOverview />
    <CatalogueOne />
    <CatalogueOneContd />
  </div>
);

export default Homepage;
