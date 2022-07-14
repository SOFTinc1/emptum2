import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const HomeBannerContainer = styled.div`
  padding: 20px 80px;
  background: linear-gradient(to right, #e3f2fd28 20%, #fffde72c 50%);
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Col1 = styled.div``;
export const Heading = styled.h1`
  font-family: Syne;
  font-size: 80px;
  font-weight: 800;
  margin: 0;
  color: #000;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    font-size: 55px;
    text-align: center;
  }
`;
export const Span = styled.span`
  font-family: Syne;
  font-size: 80px;
  font-weight: 800;
  margin: 0;
  text-transform: lowercase;

  @media screen and (max-width: 800px) {
    font-size: 55px;
  }
`;
export const Span1 = styled.span`
  font-family: Syne;
  font-size: 70px;
  font-weight: 400;
  margin: 0;
  text-transform: lowercase;

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;
export const Span2 = styled.h1`
  text-transform: lowercase;
  background-color: transparent;
  background-image: linear-gradient(45deg, #ff80ab, #82b1ff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 80px;
  margin: 0;
  font-family: Syne;

  @media screen and (max-width: 800px) {
    font-size: 55px;
  }
`;
export const Price = styled.h1`
  margin: 0;
  font-size: 50px;
  border-top: 2px solid #ff80ab;
  border-right: 2px solid #82b1ff;
  border-bottom: 2px solid #ff80ab;
  border-left: 2px solid #82b1ff;
  border-radius: 100%;
  width: 20%;
  font-family: Syne;

  @media screen and (max-width: 800px) {
    width: 40%;
    text-align: center;
    margin: 10px auto;
  }
`;
export const Par = styled.p`
  width: 400px;
  font-family: Syne;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    font-weight: 800;
    width: 100%;
    text-align: center;
  }
`;
export const CustomButtonDiv = styled(CustomButton)`
@media screen and (max-width: 800px) {
  margin: 20px auto;
}
`;
export const Col2 = styled.div``;
export const Image = styled.img`
  width: 100%;
  
  @media screen and (max-width: 800px) {
    margin: 0 0 0 -20px;
  }
`;
