import React from "react";
import "./homepage.styles.scss";
import MyHeader from "../../components/MyHeader/MyHeader.component";
import Directory from "../../components/directory/directory.component";
import HomepageBanner from "../../components/hompage-banner/homepage-banner.component";
import CatalogueOne from "../../components/catalogue-one/catalogue-one.component";
import CatalogueOneContd from "../../components/catalogue-one-contd/catalogue-one-contd.component";
import CatalogueOneContd2 from "../../components/catalogue-one-contd-2/catalogue-one-contd.component";
import CatalogueOneNew from "../../components/catalogue-one-new/catalogue-one-contd.component";


const Homepage = () => (
  <div className="homepage">
    <MyHeader />
    <HomepageBanner />
    <Directory />
    <CatalogueOne />
    <CatalogueOneContd />
    <CatalogueOneContd2 />
    <CatalogueOneNew />
  </div>
);

export default Homepage;
