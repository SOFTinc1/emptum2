import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  font-weight: 800;
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-family: typo;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  padding: 0 10px 0 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin: 10px 0 0 0;
  }
  
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 15%;
  padding: 0 5px 5px 5px;

  @media screen and (max-width: 800px) {
    width: 40%;
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
  text-decoration: none;
  padding: 10px 15px;
  color: #aaa;

  @media screen and (max-width: 525px) {
    font-size: 18px;
    padding: 10px 6px;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 10px 6px;
  }
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
  text-transform: capitalize;
`;