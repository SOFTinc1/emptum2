import styled from "styled-components";
import Bg from "../../assets/images/bg.jpg";

export const CatalogueOneContdContainer = styled.div`
  padding: 30px 80px;
  background: url(${Bg});
  background-size: cover;
`;
export const H1 = styled.h1`
  padding: 30px 120px;
  font-size: 35px;
  text-transform: uppercase;
  font-family: euclid;
  text-align: center;
  color: #fff;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
export const Col1 = styled.div``;
export const Img1 = styled.img`
  width: 100%;
  padding: 0 10px 10px 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-top: none;
  border-left: none;
`;
export const Img2 = styled.img`
  width: 100%;
  padding: 10px 10px 0 0;
  border-top: 1px solid #fff;
  border-bottom: none;
  border-right: none;
  border-left: none;
  margin: 10px 0 0 0;
`;
export const Img3 = styled.img`
  width: 100%;
  padding: 0 0 10px 10px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-top: none;
  border-right: none;
`;
export const Img4 = styled.img`
  width: 100%;
  padding: 10px 0 0 10px;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
  border-bottom: none;
  border-right: none;
  margin: 10px 0 0 0;
`;
export const Title = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  font-family: euclid;
  color: #fff;
  // text-align: center;
`;
export const Button = styled.div``;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const Col4 = styled.div``;
