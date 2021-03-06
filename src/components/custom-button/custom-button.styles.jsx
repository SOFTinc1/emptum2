import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: #000;
  color: #fff;
  font-weight: 800;
  border: none;
  transition: all .7s ease-in-out; 

  &:hover {
    background: linear-gradient(45deg, #ff80ab, #82b1ff);
    color: #000;
    
    // border: 1px solid #000;
    transform: scale(1.0);
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
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: euclid;
  text-transform: capitalize;

  ${getButtonStyles}
`;
