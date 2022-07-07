import styled from "styled-components";

export const HomepageBanner2Container = styled.div`
  padding: 0 0 10px 80px;
  height: 100vh;

  @media screen and (max-width: 800px) {
    padding: 30px 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  // background: linear-gradient(rgba(22, 72, 255, 0.192), rgba(255, 183, 0, 0.219));

  @media screen and (max-width: 800px) {
  }
`;

export const Col2 = styled.div`
  @media screen and (max-width: 800px) {
  }
`;

export const ImageSrc = styled.img`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 800px) {
    display: block;
    width: 55%;
    height: 300px;
    margin: 0 0 0 -5px;
  }
`;
export const H1 = styled.h1`
  font-family: Syne;
  font-style: ExtraBold;
  font-size: 48px;
  line-height: 58px;
  line-height: 100%;
  text-transform: lowercase;
  vertical-align: Top;
  transform: scale(1, 3);
  letter-spacing: 4px;
  margin: 100px 0 0 0;
  
  @media screen and (max-width: 800px) {
      text-transform: capitalize;
      letter-spacing: 10px;
      font-weight: 800;
      text-align: left;
      font-size: 30px;
      margin: 65px 0 50px 0;
      transform: scale(1, 1.5);
      padding: 0;
  }
`;

export const P = styled.p`
  font-family: Syne;
  font-size: 18px;
  line-height: 58px;
  line-height: 100%;
  text-transform: lowercase;
  margin: 270px 0 0 0;

  
  // @media screen and (max-width: 800px) {
  //     text-transform: capitalize;
  //     letter-spacing: 10px;
  //     font-weight: 800;
  //     text-align: left;
  //     font-size: 30px;
  //     margin: 65px 0 50px 0;
  //     transform: scale(1, 1.5);
  //     padding: 0;
  // }
`;