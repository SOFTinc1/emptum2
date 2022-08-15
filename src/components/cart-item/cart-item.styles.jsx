import styled from "styled-components";

export const CartItemContainer = styled.div``;
export const CartItemProper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 5px;
  // border: 1px solid #f9fbfb;
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
  
`;
export const Name = styled.span`
  font-size: 16px;
  margin: 15px 0 0 10px;
  height: 40px;
  font-weight: 400;
`;
export const Price = styled.span`
  font-size: 13px;
  height: 40px;
  width: 100%;
  font-weight: 800;
  padding: 0 0 0 10px;
`;
