import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: #000;
  color: #fff;
  border: none;
  transition: all .7s ease-in-out; 

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transform: scale(1.0);
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all .7s ease-in-out; 

  &:hover {
    background-color: black;
    color: white;
    border: none;
    transform: scale(1.0);
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  transition: all .7s ease-in-out; 

  &:hover {
    background-color: #357ae8;
    border: none;
    transform: scale(1.0);
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }

  return props.inverted ? InvertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: "NewYork";
  text-transform: capitalize;

  ${getButtonStyles}
`;
