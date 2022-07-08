import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import { SearchFormContainer, SearchForm, Input, ButtonInSearch } from "./search-box.styles";

const SearchBox = () => (
  <SearchFormContainer>
    <SearchForm>
      <Input placeholder="enter name of item"/>
      <ButtonInSearch as={CustomButton}>
        find item
      </ButtonInSearch>
    </SearchForm>
  </SearchFormContainer>
);

export default SearchBox;
