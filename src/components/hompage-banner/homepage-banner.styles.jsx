import styled from "styled-components";

export const HomepageBanner2Container = styled.div`
  padding: 50px 80px;

  @media screen and (max-width: 800px) {
    padding: 30px 10px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.01fr 3fr ;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ImageSrc = styled.img`
  padding: 0 10px 10px 0;
  width: 100%;
  height: 100%;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;

  @media screen and (max-width: 800px) {
    display: block;
    width: 55%;
    height: 300px;
    margin: 0 0 0 -5px;
  }
`;
export const ImageMobile = styled.img`
  display: none;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 0 10px 10px;
    display: block;
    width: 50%;
    height: 300px;
    margin: -200px 0 0 183px;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }
`;
export const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 0 0 0 30px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const H1 = styled.h1`
  text-align: left;
  font-weight: 400;
  font-family: Mighty;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 80px;
  transform: scale(1, 1.4);
  padding: 0 0 0 30px;

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
export const InnerRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Flex = styled.div`
  // border-top: 1px solid #000;
  // border-bottom: 1px solid #000;
  // border-left: none;
  // border-right: none;
  height: 164px;
  padding: 0 0 0 20px;

  @media screen and (max-width: 800px) {
    border: none;
    padding: 0;
  }
`;
export const SearchCont = styled.div`

  @media screen and (max-width: 800px) {
    // display: none;
  }
`;
export const ButtonT = styled.button``;
export const ImageSrc2 = styled.img`
  padding: 0 0 10px 10px;
  width: 100%;
  height: 100%;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

// import BackgroundImage from "../../assets/images/b.jpg";
// export const HomepageBanner2Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-image: url(${BackgroundImage});
//   background-size: cover;
//   background-repeat: no-repeat;

//   @media screen and (max-width: 800px) {
//     width: 100vw;
//   }
// `;

// export const BackgroundOverlay = styled.div`
//   width: 100vw;
//   background-color: rgba(0, 0, 0, 0.507);
//   height: 100vh;
//   margin: -40px 0 0 0;

//   @media screen and (max-width: 800px) {
//     margin: 0;
//   }
// `;

// export const H1 = styled.h1`
//   text-transform: capitalize;
//   text-align: center;
//   padding: 4rem 0 0rem 0;
//   font-size: 4rem;
//   color: #fff;

//   @media screen and (max-width: 1100px) {
//     padding: 17rem 0 0rem 0;
//   }
//   @media screen and (max-width: 800px) {
//     font-size: 2rem;
//     padding: 4rem 0 0rem 0;
//   }
//   @media screen and (max-width: 330px) {
//     font-size: 2rem;
//     padding: 7rem 0 0rem 0;
//   }
// `;

// export const Scroll = styled.div`
//   padding-top: 140px;
//   justify-content: center;
//   align-items: center;

//   @-moz-keyframes Scroll {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       transform: translateY(46px);
//     }
//   }
//   @-webkit-keyframes Scroll {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       transform: translateY(46px);
//     }
//   }
//   @-o-keyframes Scroll {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       transform: translateY(46px);
//     }
//   }
//   @keyframes scroll {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       transform: translateY(46px);
//     }
//   }
// `;

// export const IconScroll = styled.div`
//   position: relative;
//   width: 40px;
//   height: 70px;
//   margin-left: 650px;
//   /* top: 84%; */
//   margin-top: -15px;
//   box-shadow: inset 0 0 0 1px #fff;
//   border: 2px solid #fff;
//   border-radius: 25px;

//   @media screen and (max-width: 1100px) {
//     margin: 0 0 0 24rem;
//   }
//   @media screen and (max-width: 800px) {
//     margin: 13rem 0 0 11rem;
//   }
//   @media screen and (max-width: 330px) {
//     margin: 12rem 0 0 15rem;
//   }

//   &:before {
//     position: absolute;
//     left: 40%;

//     content: "";
//     width: 9px;
//     height: 9px;
//     background: #fff;
//     top: 8px;
//     border-radius: 4px;
//     animation-duration: 2s;
//     animation-iteration-count: infinite;
//     animation-name: scroll;
//   }
// `;
