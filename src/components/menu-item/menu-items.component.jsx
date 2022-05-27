import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "../directory/withRouter";
// import CustomButton from "../custom-button/custom-button.component";
// import { Navigate } from "react-router-dom";



const MenuItem = ({ title, imageUrl, size, history, navigate, linkUrl, match}) => (
    <div className={`${size} menu-item`} >

        <div className="background-image" 
            style={{
            backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle" onClick={() => {navigate(linkUrl)}} >shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);