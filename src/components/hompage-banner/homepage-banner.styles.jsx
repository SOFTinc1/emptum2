import styled from "styled-components";

export const HomepageBanner2Container = styled.div`
  width: 100%;
  padding: 80px 30px;
  background: #F5F5F5;

  @media screen and (max-width: 800px) {
    padding: 50px 0;
    height: 100%;
  }
`;

export const Col1 = styled.div`
  @media screen and (max-width: 800px) {
  }
`;

export const H1 = styled.h1`
  font-family: Syne;
  font-size: 83px;
  color: #fff;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: 4px;
  text-transform: lowercase;
  background-color: transparent;
  background-image: linear-gradient(45deg, #000, #ff80ab, #82b1ff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 80px;
  margin: 0;
  font-family: Syne;
  // transform: scale(1, 2);
  font-stretch: ultra-condensed // transform: translateX(100%);
    -moz-animation: my-animation 15s linear infinite;
    -webkit-animation: my-animation 15s linear infinite;
    animation: my-animation 5s linear infinite slide;
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
    font-size: 40px;
    width: 100%;
  }
`;

export const Span = styled.span`
  border-top: 2px solid #ff80ab;
  border-right: 2px solid #82b1ff;
  border-bottom: 2px solid #ff80ab;
  border-left: 2px solid #82b1ff;
  border-radius: 100%;
  width: 20%;
  font-family: Syne;
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
