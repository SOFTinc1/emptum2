import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MyHeaderContainer,
  Row,
  Col1,
  Col2,
  Col3,
  ImageSrc,
  Wrapper,
  Ul,
  Li,
  A,
  LogoH1,
  Sup
} from "./MyHeader.styles";
import "./MyHeader.styles.css";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
// import LogoImg from "../../assets/images/emptum.svg";
import Image1 from "../../assets/images/menu.svg";

const MyHeader = ({ currentUser, hidden }) => {
  let navigate = useNavigate();
  return (
    <MyHeaderContainer>
      <Row>
        <Col1>
          <CartIcon />
        </Col1>
        <Col2>
          {/* <Logo src={LogoImg} /> */}
          <LogoH1 onClick={() => {navigate("/");}}>emptum.</LogoH1>
        </Col2>
        <Col3>
          <input type="checkbox" id="active"></input>
          <label for="active" class="menu-btn">
            <ImageSrc src={Image1} />
          </label>
          <Wrapper className="wrapper">
            <Ul>
              <Li>
                {currentUser ? (
                  <A class="a" onClick={() => auth.signOut()}>
                    {currentUser.displayName}
                  </A>
                ) : (
                  <A class="a" onClick={() => {navigate("/signin");}}>
                    <Sup>01</Sup> sign in
                  </A>
                )}
              </Li>
              <Li>
                <A class="a" onClick={() => {navigate("/shop");}}> <Sup>02</Sup> shop</A>
              </Li>
              <Li>
                <A class="a"> <Sup>03</Sup> about</A>
              </Li>
              <Li>
                <A class="a" onClick={() => {navigate("/signin");}}><Sup>04</Sup> last</A>
              </Li>
            </Ul>
          </Wrapper>
        </Col3>
      </Row>
      {hidden ? null : <CartDropdown />}
    </MyHeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(MyHeader);
