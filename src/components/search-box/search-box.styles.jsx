import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 90%;
  // top: 20px;
  // left: 10rem;
  box-sizing: border-box;
  position: absolute;
  background: none;
  // opacity: 0.8;
  // border: 2px solid #000;
  border-radius: none;
  padding: 20px 10px 20px 0px;

  @media screen and (max-width: 950px) {
    // left: 5rem;
  }

  @media screen and (max-width: 800px) {
    // width: 60%;
    display: flex;
    flex-direction: column;
    width: 100%;
    left: 0rem;
  }


`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000000;
  cursor: pointer;
  border: 2px solid #000;
  // border: none;
  padding: 1.3rem;
  border-radius: none;
  margin: 0 10px 0 10px;
  font-family: axiforma;
  text-align: center;
  text-transform: capitalize;
  outline: none;
  transition: all .5s ease-in-out; 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &::placeholder {
    color: #000;
    font-family: Euclid;
    font-size: 16px;
    font-weight: 800;
  }

  &:focus {
    background: Transparent;
    color: #000;
    // padding: 1.6rem;
    // transform: scale(1.0);
  }

  @media screen and (max-width: 800px) {
    margin: 0 0 10px 0;
    width: 100%;
  }
  
`;

export const ButtonInSearch = styled.button`
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

`;
