import styled from "styled-components";

export const MyHeaderContainer = styled.div`
  margin: 0;
  padding: 10px 30px;
  //   background: #000;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;
export const LogoH1 = styled.h1`
  width: 100%;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 10px 0 0 0;
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
    margin: 0 0 0 -0px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
`;
export const Li = styled.li`
  margin: 15px 0;
`;
export const A = styled.a`
  color: none;
  text-decoration: none;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 3px;
  color: #fff;
  position: relative;
  line-height: 100px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: capitalize;

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
//   margin: -13px 0 0 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
//   background: linear-gradient(-135deg, #c850c0, #4158d0);
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
  clip-path: circle(25px at calc(100% - 105px) 45px);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 800px) {
    clip-path: circle(25px at calc(100% - 37px) 45px);
    margin: -2px 0 0 0;
  }
`;
