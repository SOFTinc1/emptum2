import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-items.component";
import "./directory.styles.scss";
import Slide from "react-reveal/Slide";

const Directory = ({ sections }) => (
  <Slide bottom>
    <div className="directory-menu">
      <div className="inner-row">
        <h1 className="categories">categories</h1>
        <h2 className="categories-title">explore our various categories</h2>
        <p className="categories-details">
          unless your awesomeness with emptum store, where all things clothing
          are readilty available with ease of order
        </p>
      </div>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  </Slide>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
