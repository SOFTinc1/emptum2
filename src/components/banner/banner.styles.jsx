import styled from "styled-components";
import bannerImg from "../../assets/images/banner1.jpg";
// import bannerImg2 from "../../assets/images/b.jpg";

export const BannerContainer = styled.div`
  padding: 0 0 50px 0;
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
  margin: -20px 0 0 0;
  opacity: 0.1;
  text-transform: lowercase;
  font-size: 200px;
`;
export const H1 = styled.h1`
  font-family: syne;
  text-align: center;
  margin: 0;
  font-size: 50px;
  padding: 0;
  margin: -100px 0 0 0;
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
`;
export const ImageRow = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 5px;

  @media screen and (max-width: 575px) {
    // margin: 0 0 0 35px;
  }
  @media screen and (max-width: 400px) {
    // margin: 40px 0 0 20px;
  }
`;
export const Image1 = styled.div`
  width: 100%;
  height: 500px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.7s ease-in-out;
  background-image: url(${bannerImg});
`;
// export const Image2 = styled.div`
//   width: 100%;
//   height: 500px;
//   background-attachment: fixed;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   transition: background-image 0.7s ease-in-out;
//   background-image: url(${bannerImg2});
// `;
export const IntroRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 80px 80px 30px 80px;
`;
export const Intro = styled.h1`
  font-family: syne;
  text-align: left;
  font-size: 30px;
  width: 424px;
  font-weight: 800;
  letter-spacing: 1px;
`;
export const Details = styled.p`
  font-family: typo;
  text-align: right;
  font-size: 16px;
  font-weight: 800;
`;
