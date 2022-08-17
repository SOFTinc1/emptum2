import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  Logo
} from "./header.styles";
import "./header.css";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import DarkMode from "../DarkMode/DarkMode";

import LogoImg from "../../assets/images/logo.svg";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo src={LogoImg} />
    </LogoContainer>
    <OptionsContainer>
      <DarkMode />
      <OptionLink to="/shop">
        {" "}shop{" "}
      </OptionLink>
      <OptionLink to="/contact">
        {" "}contact{" "}
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          { currentUser.displayName }
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signin">
          sign in
        </OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
