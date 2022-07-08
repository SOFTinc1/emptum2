import styled from "styled-components";

export const CatalogueOneContdContainer = styled.div`
  width: 100vw;
  background: #FBFBFB;
  background-size: cover;

  @media screen and (max-width: 800px) {
    // padding: 50px 45px;
  }
`;
export const H1 = styled.h1`
  padding: 30px 120px;
  font-size: 35px;
  text-transform: uppercase;
  font-family: euclid;
  text-align: center;
  color: #000;

  @media screen and (max-width: 800px) {
    padding: 20px 10px 20px 0;
    font-size: 20px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Col1 = styled.div`
  border: 1px solid #aaa;
  height: 200px;

  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;
export const Col2 = styled.div`
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-left: none;
`;
export const Col3 = styled.div`
  background: #424242;
  color: #fff;
`;
export const H2 = styled.h1`
  Padding: 0 20px;
  font-family: Syne;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    padding: 10px 0 0 0;
  }
`;
export const P = styled.p`
  margin: 130px 20px 0 20px;
  font-family: Syne;
  font-size: 12px;

  @media screen and (max-width: 800px) {
    font-size: 13px;
    margin: 110px 5px 0 5px;
  }
`;
