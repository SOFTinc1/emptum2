import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: 0 auto;
`;

export const LoginTextContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;


export const SignInTittle = styled.div`
  font-family: Syne;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
  margin-top: 56px;
`;



export const SignInSpan = styled.span`
  font-family: Axiforma;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #555555;
  margin-top: 24px;

  // @media screen and (max-width: 800px) {
  //   width: 50%;
  // }
`;
