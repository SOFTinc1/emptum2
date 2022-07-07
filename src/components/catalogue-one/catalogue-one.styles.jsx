import styled from "styled-components";
import ImageS from "../../assets/images/POTRAIT.jpg";
// import Bg from "../../assets/images/bg.jpg";

export const CatalogueOneContainer = styled.div`
  padding: 50px 350px;
  background: #424242;
  background-size: cover;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 0px;
`;
export const Col1 = styled.div`
  background: url(${ImageS});
  background-size: cover;
  height: 80vh;
  transform: rotate(-5deg);
`;
export const Categories = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  font-family: Mighty;
  text-align: center;
  color: #fff;
`;
export const InnerFlex = styled.div`
  margin: 80px 0 0 -380px;
  // transform: rotate(5deg);
`;
export const Col2 = styled.div``;
export const Card = styled.div`
  margin: 75px 0 0 -70px;
  width: 350px;
  background: #F5F5F5;
  padding: 45px 30px 30px 30px;
  height: 350px;
  transform: rotate(0deg);
`;
export const H2 = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  font-family: euclid;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 25px;
  text-transform: capitalize;
  font-family: euclid;
  text-align: center;
  font-weight: 400;
`;
export const Price = styled.div`
  font-family: euclid;
  text-align: center;
  font-weight: 800;
  padding: 0 0 20px 0;
`;
export const Button = styled.button`
  margin: 0 auto;
`;
