import styled from "styled-components";

export const HomepageBanner2Container = styled.div`
  width: 100vw;
  padding: 10px 30px;
  height: 100vh;
  background: linear-gradient(to right, #e3f2fd28 20%, #fffde72c 50%);

  @media screen and (max-width: 800px) {
    padding: 30px 10px 770px 10px;
    height: 100vh;
  }
`;
// export const Row = styled.div`
//   // display: grid;
//   // grid-template-columns: 2fr 3fr;
//   // grid-gap: 10px;

//   @media screen and (max-width: 800px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

export const Col1 = styled.div`
  // background: linear-gradient(rgba(22, 72, 255, 0.192), rgba(255, 183, 0, 0.219));

  @media screen and (max-width: 800px) {
  }
`;

// export const Col2 = styled.div`
//   @media screen and (max-width: 800px) {
//   }
// `;

// export const ImageSrc = styled.img`
//   width: 100%;
//   height: 100vh;

//   @media screen and (max-width: 800px) {
//     display: block;
//     width: 55%;
//     height: 300px;
//     margin: 0 0 0 -5px;
//   }
// `;
export const H1 = styled.h1`
  font-family: Syne;
  font-style: ExtraBold;
  font-size: 83px;
  line-height: 58px;
  line-height: 100%;
  text-transform: lowercase;
  vertical-align: Top;
  letter-spacing: 4px;
  margin: 30px 0 0 0;
  transform: scale(1, 2);
  font-stretch: ultra-condensed // transform: translateX(100%);
    // -moz-animation: my-animation 15s linear infinite;
    // -webkit-animation: my-animation 15s linear infinite;
    // animation: my-animation 5s linear infinite slide;
    @keyframes my-animation {
    from {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    to {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 800px) {
    text-transform: lowercase;
    letter-spacing: 10px;
    font-weight: 800;
    text-align: left;
    font-size: 50px;
    margin: 100px 0 50px 0;
    transform: scale(1, 2.2);
    text-align: center;
  }
`;

export const Span = styled.span`
  border: 2px solid #0D47A1;
  border-radius: 100%;
`;

export const P = styled.p`
  font-family: Syne;
  font-size: 74.9px;
  text-transform: lowercase;
  margin: 0;
  text-align: left;

  @media screen and (max-width: 800px) {
    font-weight: 800;
    font-size: 30px;
    margin: 76px 0 0 0;
  }
`;

export const Search = styled.div`
  padding: 250px 0 0 0;
`;
