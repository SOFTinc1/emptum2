import React from "react";
import "./homepage-banner.styles.scss";
import Icon from "../../assets/images/icon.svg";
import ewe  from "../../assets/images/b.jpg";
// import CustomButton from "../custom-button/custom-button.component";



const HomepageBanner = () => (
    <div className="one">
        <h1>explore our <br /> amazing platform</h1>
        <div className="card-container">
            <div className="card">
                <h2>just a touch</h2>
                <p>contact us </p>
                {/* <div className="icon-container"> <Icon className="icon" /> </div> */}
                <div  className="footer">
                    {/* <span>.shop with ease </span>
                    <span>.become a vendor</span>
                    <span>. all categories</span>
                    <span>. meet our manufacturers</span> */}
                    <div className="icon-container"> <img src={Icon} alt="" /> <p>(+112)345 456 43</p> </div>
                    <div className="icon-container"> <img src={Icon} alt="" /> <p>softinc@gmail.com</p> </div>
                    <div className="icon-container"> <img src={Icon} alt="" /> <p>233, maryland, USA</p> </div>    
                </div>
            </div>
            <div className="image-container">
                <img src={ewe} alt="" />
            </div>
        </div>
    </div>
)

export default HomepageBanner;