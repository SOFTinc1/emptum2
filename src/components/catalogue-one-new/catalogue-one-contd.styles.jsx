import styled from "styled-components";
import Bg from "../../assets/images/b.jpg";

export const CatalogueOneContdContainer = styled.div`
  width: 100vw;
  // background: #424242;
  background-size: cover;

  @media screen and (max-width: 800px) {
    
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Col1 = styled.div`
  border: 1px solid #aaa;
`;
export const Col2 = styled.div`
  border-top: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-left: none;

  @media screen and (max-width: 800px) {
    border: 1px solid #aaa;
  }
`;
export const Col3 = styled.div`
  background: #424242;
  color: #fff;
`;
export const Col4 = styled.div`
  background: url(${Bg});
  background-size: cover;
  height: 400px;
  padding: 0 0 0 700px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 300px;
    padding: 0;
  }
`;
export const Col5 = styled.div`
  border-bottom: 1px solid #aaa;
  border-top: 1px solid #aaa;
  height: 200px;
 
  @media screen and (max-width: 800px) {
    height: 300px;
    border: 1px solid #aaa;
  }
`;
export const Col6 = styled.div`
  border-bottom: 1px solid #aaa;
  height: 200px;

  @media screen and (max-width: 800px) {
    height: 300px;
    border: 1px solid #aaa;
  }
`;
// export const ImagesSrc = styled.img`
//   width: 800px;
//   height: 400px;
// `;
export const H2 = styled.h1`
  Padding: 0 20px;
  font-family: Syne;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }
`;
export const P = styled.p`
  margin: 290px 20px 0 20px;
  font-family: Syne;
  font-size: 12px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 150px 5px 0 5px;
  }
`;
export const P2 = styled.p`
  margin: 120px 20px 0 20px;
  font-family: Syne;
  font-size: 10px;

  // @media screen and (max-width: 800px) {
  //   font-size: 13px;
  //   margin: 110px 5px 0 5px;
  // }

  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 150px 5px 0 5px;
  }
`;