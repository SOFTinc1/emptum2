import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
// import HomepageBanner from "../../components/homepage-banner/homapage-banner.component";
import HomepageBanner2 from "../../components/hompage-banner2/homepage-banner2.component";



const Homepage = () => (
    <div className="homepage">
        <HomepageBanner2 />
        <Directory />
        {/* <HomepageBanner /> */}
    </div>       
)

export default Homepage;