import styled from "styled-components";

export const HomepageBanner2Container = styled.div`
  width: 100vw;
  padding: 10px 30px;
  background: linear-gradient(to right, #e3f2fd28 20%, #fffde72c 50%);

  @media screen and (max-width: 800px) {
    padding: 30px 10px 770px 10px;
    height: 100vh;
  }
`;

export const Col = styled.div`
  @media screen and (max-width: 800px) {
  }
`;

export const H1 = styled.h1`
  font-family: Syne;
  font-style: ExtraBold;
  font-size: 70px;
  line-height: 58px;
  line-height: 100%;
  text-transform: lowercase;
  vertical-align: Top;
  letter-spacing: 4px;
  margin: 40px 0 0 0;
  transform: scale(1, 2);
  font-stretch: ultra-condensed // transform: translateX(100%);
    -moz-animation: my-animation 15s linear infinite;
    -webkit-animation: my-animation 15s linear infinite;
    animation: my-animation 5s linear infinite slide;
    @keyframes my-animation {
    from {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    to {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @media screen and (max-width: 800px) {
    text-transform: lowercase;
    letter-spacing: 10px;
    font-weight: 800;
    text-align: left;
    font-size: 50px;
    margin: 100px 0 50px 0;
    transform: scale(1.2, 2.2);
    text-align: center;
  }
`;