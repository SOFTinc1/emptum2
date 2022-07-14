import styled from "styled-components";
// import Bg from "../../assets/images/b.jpg";

export const CatalogueOneContdContainer = styled.div`
  width: 100%;
  background: #FBFBFB;
  background-size: cover;

  @media screen and (max-width: 800px) {
     
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0px;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  // border-left: 1px solid #aaa;
`;
export const Col4 = styled.div`
  
`;
export const Col5 = styled.div`
  border-bottom: 1px solid #aaa;
  height: 150px;
`;
export const Col6 = styled.div`
  border-bottom: 1px solid #aaa;
  height: 150px;
`;
export const ImagesSrc = styled.img`
  width: 800px;
  height: 300px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;
export const H2 = styled.h1`
  Padding: 0 20px;
  font-family: Syne;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    margin: 10px 0 0 0;
  }
`;
export const P = styled.p`
  margin: 100px 20px 0 20px;
  font-family: Syne;
  font-size: 12px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin: 42px 5px 0 5px;
  }
`;
