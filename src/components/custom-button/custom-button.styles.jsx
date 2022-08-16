import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: #c60014;
  color: #fff;
  border: none;
  transition: all .7s ease-in-out;
  border-radius: 32px;


  &:hover {
    background: #9E9E9E;
    color: #000;
    transform: scale(1.0);
    font-weight: 800;
  }
`;

const InvertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all .7s ease-in-out; 

  &:hover {
    background: linear-gradient(45deg, #ff80ab, #82b1ff);
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
    background-color: linear-gradient(45deg, #ff80ab, #82b1ff);
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
  // min-width: 165px;
  // font-weight: 400;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: syne;
  text-transform: lowercase;

  ${getButtonStyles}
`;
