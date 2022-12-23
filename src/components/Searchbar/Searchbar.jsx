import styled from '@emotion/styled';

import { SearchbarHeader, SearchForm, SearchBtn, BtnLabel, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {};

  render() {
    return (
      <SearchbarHeader>
        <SearchForm>
          <SearchBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </SearchBtn>

          <Input type="text" autocomplete="off" autofocus placeholder="Search images and photos" />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
