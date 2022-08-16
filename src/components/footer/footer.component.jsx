import React from "react";
import { connect } from "react-redux";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  FooterContainer,
  Row,
  P,
  Span,
  CartIconContainer,
} from "./footer.styles";

const Footer = ({ hidden }) => (
  <FooterContainer>
    <Row>
      <P>
        developed by idowu elijah <Span>&copy;2022</Span>{" "}
      </P>
      <CartIconContainer />
    </Row>
    {hidden ? null : <CartDropdown />}
  </FooterContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Footer);
