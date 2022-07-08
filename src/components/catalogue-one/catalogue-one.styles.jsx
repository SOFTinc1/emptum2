import styled from "styled-components";
import ImageS from "../../assets/images/POTRAIT.jpg";
// import Bg from "../../assets/images/bg.jpg";

export const CatalogueOneContainer = styled.div`
  width: 100vw;
  padding: 50px 350px;
  background: #424242;
  background-size: cover;

  @media screen and (max-width: 800px) {
    padding: 50px 45px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  background: url(${ImageS});
  background-size: cover;
  height: 80vh;
  transform: rotate(-5deg);

  @media screen and (max-width: 800px) {
    // padding: 0 0 0 20px;
  }
`;
export const Categories = styled.h1`
  font-size: 35px;
  text-transform: capitalize;
  font-family: Syne;
  text-align: center;
  color: #fff;
`;
export const InnerFlex = styled.div`
  margin: 80px 0 0 -380px;
  // transform: rotate(5deg);

  @media screen and (max-width: 800px) {
    margin: 120px 0 0 -220px;
    transform: rotate(-5deg);
  }
`;
export const Col2 = styled.div``;
export const Card = styled.div`
  margin: 75px 0 0 -70px;
  width: 350px;
  background: #F5F5F5;
  padding: 45px 30px 30px 30px;
  height: 350px;
  transform: rotate(0deg);

  @media screen and (max-width: 800px) {
    width: 250px;
    margin: -85px 0 0 35px;
    padding: 45px 0 0 0;
  }
`;
export const H2 = styled.h1`
  font-size: 15px;
  text-transform: uppercase;
  font-family: euclid;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 28px;
    margin: 0 0 20px 0;
  }
`;
export const H1 = styled.h1`
  font-size: 25px;
  text-transform: capitalize;
  font-family: euclid;
  text-align: center;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;
export const Price = styled.div`
  font-family: euclid;
  text-align: center;
  font-weight: 800;
  padding: 0 0 20px 0;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;
export const Button = styled.button`
  margin: 0 auto;
`;
