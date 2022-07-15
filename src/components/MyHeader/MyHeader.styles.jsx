import styled from "styled-components";
import { Link } from "react-router-dom";

export const MyHeaderContainer = styled.div`
  margin: 0;
  padding: 10px 30px;
  width: 100vw;

  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 100%;
  }
`;
export const LogoH1 = styled.h1`
  width: 100%;
  margin: 0;
  text-transform: lowercase;
  background-color: transparent;
  background-image: linear-gradient(35deg,#000, #ff80ab, #82b1ff);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-family: NewYork;
  font-weight: 800;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin: 10px 0 0 0;
    font-size: 20px;
    font-weight: 800;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const Col1 = styled.div`
  margin: 0 0 0 50px;
  padding: 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Col2 = styled.div`
  margin: 4px 0 0 200px;
  padding: 0;

  @media screen and (max-width: 800px) {
    margin: 0 0 0 30px;
  }
`;
export const Col3 = styled.div`
  margin: 0 0 0 295px;

  @media screen and (max-width: 800px) {
    margin: 0 0 0 60px;
  }
`;
export const ImageSrc = styled.img`
  width: 100%;
  padding: 10px 10px 3px 10px;
`;
export const Ul = styled.ul`
  position: absolute;
  top: 10%;
  list-style-type: none;
  // left: 50%;
  // text-align: left;
  // transform: translate(-50%, -50%);

  @media screen and (max-width: 800px) {
    left: 10%;
  }
`;
export const Sup = styled.sup`
  font-size: 20px;
  opacity: .7;
`;
export const Li = styled.li`
  margin: 15px 0;
`;
export const A = styled(Link)`
  color: none;
  text-decoration: none;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 3px;
  color: #000;
  position: relative;
  line-height: 100px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: lowercase;
  font-family: Syne;


  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    transform: scaleY(0);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  &:hover::after {
    transform: scaleY(1);
    padding: 0 0 20px 0;
    width: 50%;
    border-bottom: 2px solid #fff;
  }
  &:hover {
    // color: #fff;
  }
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
  clip-path: circle(25px at calc(100% - 105px) 45px);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 800px) {
    clip-path: circle(25px at calc(100% - 37px) 45px);
    margin: -2px 0 0 0;
  }
`;
