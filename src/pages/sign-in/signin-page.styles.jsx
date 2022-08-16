import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  padding: 0 0 150px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
export const LoginTextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SignInTittle = styled.div`
  font-family: syne;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #444946;
  margin-top: 36px;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 36px;
  }
`;
export const SignInSpan = styled.p`
  font-family: typo;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 25px;
  color: #444946;
  margin-top: 24px;
  width: 100%;
  letter-spacing: 2px;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 0 20px;
  }
`;
