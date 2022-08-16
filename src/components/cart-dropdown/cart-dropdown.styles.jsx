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
  bottom: 90px;
  right: 40px;
  z-index: 9;
  transition: all 0.9s ease-in-out;
  transform: scale(1.1);
  background: #f9fbfb;
  border: 2px solid #aaa;
  font-family: syne;

  button {
    margin-top: auto;
  }
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-x: none;
  overflow-y: scroll;
  font-family: syne;

  // &::-webkit-scrollbar {
  //   display: none;
  // }
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
  text-transform: capitalize;
  font-family: syne;
`;