import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  top: 90px;
  left: 40px;
  z-index: 5;
  border: 2px solid #aaa;
  // background: linear-gradient(45deg, #ff80ab, #82b1ff);

  button {
    margin-top: auto;
  }
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  // -ms-overflow-style: none;
  // scrollbar-width: none;  

  // &::-webkit-scrollbar {
  //   display: none;
  // }
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
  text-transform: capitalize;
`;