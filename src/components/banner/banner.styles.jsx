import styled from "styled-components";
import bannerImg from "../../assets/images/banner1.jpg";
import bannerImgMobile from "../../assets/images/banner1-mobile.jpg";
import CustomButton from "../custom-button/custom-button.component";

export const BannerContainer = styled.div`
  padding: 0;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 30px 0;
  }
`;
export const Head = styled.h1`
  background-color: transparent;
  background-image: linear-gradient(
    90deg,
    #a3d5e7 -3.59%,
    #9074ed 53.05%,
    #ea3c5c 106.26%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-transform: capitalize;
  font-family: syne;
  letter-spacing: 0;
  margin: -30px 0 0 0;
  opacity: 0.1;
  text-transform: lowercase;
  font-size: 200px;

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 89px;
    text-align: center;
  }
`;
export const H1 = styled.h1`
  font-family: syne;
  text-align: center;
  font-size: 50px;
  padding: 0;
  margin: -100px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: -60px 0 0 0;
    width: 100%;
  }
`;
export const P = styled.p`
  font-family: typo;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: 2px;
  padding: 0 0 70px 0;
  font-weight: 800;
  font-size: 16px;
  width: 600px;
  margin: 20px auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    margin: 20px auto 0 auto;
  }
`;
export const ImageRow = styled.div``;
export const Image1 = styled.div`
  width: 100%;
  height: 500px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.7s ease-in-out;
  background-image: url(${bannerImg});

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 350px;
    background-image: url(${bannerImgMobile});
  }
`;
export const IntroRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 80px 80px 30px 80px;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 10px 0 10px; 
  }
`;
export const Intro = styled.h1`
  font-family: syne;
  text-align: left;
  font-size: 30px;
  width: 424px;
  font-weight: 800;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Details = styled.p`
  font-family: typo;
  text-align: right;
  font-size: 16px;
  font-weight: 800;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 auto;
    text-align: left;
    letter-spacing: 1px;
    text-transform: lowercase;
  }
`;
export const ButtonC = styled(CustomButton)`
  margin: -70px auto 30px auto;
  width: 10%;

  @media screen and (max-width: 800px) {
    width: 40%;
    margin: -40px auto 30px auto;
  }
`;