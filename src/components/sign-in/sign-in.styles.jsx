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
  }
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  // @media screen and (max-width: 800px) {
  //   display: flex;
  //   flex-direction: column;
  //   margin: 0 0 30px 0;
  // }
`;
export const PasswordExtra = styled.div`
  display: flex;
  width: 467px;
  justify-content: space-between;
  padding-bottom: 26px;
  font-family: Axiforma;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #555555;

  // @media screen and (max-width: 800px) {
  //   display: flex;
  //   flex-direction: column;
  //   margin: 0 0 30px 0;
  // }
`;
export const ForgetPassword = styled.div`
  margin -60px 0 0 0;
  color: #000;
`;
export const SignUpRedirect = styled.div`
  margin -60px 0 0 0;
  text-transform: capitalize;
  color: #aaa;
`;
export const Span = styled(Link)`
  cursor: pointer;
  color: #000;

  &:hover {
    color: #000;
  }
`;
export const ShowIcon = styled(ShowSvg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 80px;

  // @media screen and (max-width: 800px) {
  //   left: 0;
  //   bottom: 0;
  // }
`;
export const HideIcon = styled(HideSvg)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 80px;

  // @media screen and (max-width: 800px) {
  //   left: 0;
  //   bottom: 0;
  // }
`;