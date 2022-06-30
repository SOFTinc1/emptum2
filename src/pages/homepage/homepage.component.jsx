import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import HomepageBanner from "../../components/hompage-banner/homepage-banner.component";
import CatalogueOverview from "../../components/catalogue-overview/catalogue-overview.component";


const Homepage = () => (
  <div className="homepage">
    <HomepageBanner />
    <Directory />
    <CatalogueOverview />
  </div>
);

export default Homepage;
