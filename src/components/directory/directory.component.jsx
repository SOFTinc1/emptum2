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
    { sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  </Slide>

)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);