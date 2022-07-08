import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  background: none;
  border-radius: none;
  // padding: 20px 10px 20px 0px;
  

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
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 0px;
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
  height: 65px;
  background: #fff;
  color: #000000;
  cursor: pointer;
  border: 1px solid #000;
  // border: none;
  padding: 1.3rem;
  border-radius: none;
  margin: 0 10px 0 10px;
  font-family: axiforma;
  text-align: center;
  text-transform: capitalize;
  outline: none;
  transition: all .5s ease-in-out; 
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &::placeholder {
    color: #000;
    font-family: Euclid;
    font-size: 16px;
    font-weight: 800;
    text-align: left;
  }

  &:focus {
    background: Transparent;
    color: #000;
    text-align: left;
  }

  @media screen and (max-width: 800px) {
    margin: 0 0 10px 0;
    width: 100%;
  }
  
`;

export const ButtonInSearch = styled.button`
  width: 100%;
  height: 65px;
  padding: 7px 0;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

`;