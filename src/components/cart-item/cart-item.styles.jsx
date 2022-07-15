import styled from "styled-components";

export const CartItemContainer = styled.div``;
export const CartItemProper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #aaa;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  // background: linear-gradient(45deg, #ff80ab, #82b1ff);
`;
export const ImgSrc = styled.img`
  width: 30%;
  height: 80%;
  margin: 8px 0 0 5px;
  // border-radius: 3px;
  // border-top: 2px solid #000;
  // border-left: 2px solid #000;
  // border-bottom: 2px solid #000;
`;
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // padding: 10px 20px;
  // border: 2px solid #000;
`;
export const Name = styled.span`
  font-size: 16px;
  margin: 15px 0 0 10px;
  height: 40px;
  font-weight: 800;
`;
export const Price = styled.span`
  height: 40px;
  width: 100%;
  font-weight: 800;
  padding: 0 0 0 10px;
  // border-top: 2px solid #000;
`;
