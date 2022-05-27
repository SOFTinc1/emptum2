import styled from "styled-components";
import BackgroundImage from "../../assets/images/b.jpg";



export const HomepageBanner2Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 800px) {
    width: 100vw;
    // padding: 2rem;
  }
`;

export const BackgroundOverlay = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.507);
  height: 100vh;
  margin: -40px 0 0 0;

  @media screen and (max-width: 800px) {
    margin: -20px 0 0 0;
  }
`;

export const H1 = styled.h1`
  text-transform: capitalize;
//   margin: 5rem 0 0 0;
  text-align: center;
  padding: 4rem 0 0rem 0;
  font-size: 4rem;
  color: #fff;

  @media screen and (max-width: 1100px) {
    padding: 17rem 0 0rem 0;
  }
  @media screen and (max-width: 800px) {
    font-size: 2rem;
    padding: 4rem 0 0rem 0;
  }
  @media screen and (max-width: 330px) {
    font-size: 2rem;
    padding: 7rem 0 0rem 0;
  }
`;

export const Scroll = styled.div`
  padding-top: 140px;
  justify-content: center;
  align-items: center;

  @-moz-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @-webkit-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @-o-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
`;

export const IconScroll = styled.div`
  position: relative;
  width: 40px;
  height: 70px;
  margin-left: 650px;
  /* top: 84%; */
  margin-top: -15px; 
  box-shadow: inset 0 0 0 1px #fff;
  border: 2px solid #fff;
  border-radius: 25px;

  @media screen and (max-width: 1100px) {
    margin: 0 0 0 24rem;
  }
  @media screen and (max-width: 800px) {
    margin: 13rem 0 0 11rem;
  }
  @media screen and (max-width: 330px) {
    margin: 12rem 0 0 15rem;
  }

  &:before {
    position: absolute;
    left: 50%;

    content: "";
    width: 9px;
    height: 9px;
    background: #fff;
    // margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
`;
