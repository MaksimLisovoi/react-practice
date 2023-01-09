import React, { Component } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchBtn,
  BtnLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </SearchBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
