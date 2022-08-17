import styled from 'styled-components';
import { Link } from "react-router-dom";
 
import { ReactComponent as HideSvg } from '../../assets/images/hide.svg';
import { ReactComponent as ShowSvg } from '../../assets/images/show.svg';


export const SigninContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 467px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 0 20px;
  }
`;
export const ButtonsBarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: -40px 0 30px 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 100%;
  }
`;
export const PasswordExtra = styled.div`
  width: 467px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 26px;
  font-family: syne;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  // color: #555555;
  margin: -40px 0 30px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: -40px 0 30px 0;
  }
`;
export const ForgetPassword = styled.h2`
  // color: #000;
  cursor: pointer;
  font-size: 18px;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    font-size: 18px;
  }
`;
export const SignUpRedirect = styled.h2`
  text-transform: capitalize;
  // color: #aaa;
  font-size: 18px;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    font-size: 18px;
  }
`;
export const Span = styled(Link)`
  cursor: pointer;
  // color: #000;
`;
export const ShowIcon = styled(ShowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 80px;
  }
`;
export const HideIcon = styled(HideSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 88px;

  @media screen and (max-width: 525px) {
    left: 330px;
    bottom: 90px;
  }

  @media screen and (max-width: 400px) {
    left: 300px;
    bottom: 80px;
  }
`;