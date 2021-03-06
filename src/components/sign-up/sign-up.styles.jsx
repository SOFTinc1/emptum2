import styled from 'styled-components';

import { ReactComponent as HideSvg } from '../../assets/images/hide.svg';
import { ReactComponent as ShowSvg } from '../../assets/images/show.svg';


export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 467px;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: block;
  }
`;


export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -50px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
    display: block;
  }
`;


export const ShowIcon = styled(ShowSvg)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 80px;

  // position: absolute;
  // top: 425px;
  // left: 910px;

`;

export const HideIcon = styled(HideSvg)`
  width: 20px;
  height: 20px;

  cursor: pointer;
  position: relative;
  left: 420px;
  bottom: 80px;
`;
