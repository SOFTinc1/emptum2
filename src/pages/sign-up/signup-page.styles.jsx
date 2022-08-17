import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin: 0 auto;
  padding: 0 0 80px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0 20px 95px 20px;
  }
`;

export const SignUpTextContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;


export const SignUpTittle = styled.div`
  font-family: syne;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  margin-top: 56px;
  // color: #444946;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin-top: 56px;
  }
`;


export const SignUpSpan = styled.span`
  font-family: typo;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 25px;
  align-self: center;
  margin-top: 24px;
  // color: #444946;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding: 0 20px;
  }
`;
