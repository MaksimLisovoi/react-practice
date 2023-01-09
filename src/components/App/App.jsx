import React, { Component } from 'react';

import { AppBody } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import picturesApi from '../../services/pictures-api';

export class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, pictures: [] });
  };

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    picturesApi
      .fetchPictures(options)
      .then(({ data }) => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { pictures, isLoading } = this.state;
    return (
      <>
        <AppBody>
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery pictures={pictures} />
          {isLoading && <h1>Loading...</h1>}
        </AppBody>

        {pictures.length > 0 && !isLoading && (
          <button onClick={this.fetchPictures} type="button">
            Load more...
          </button>
        )}
      </>
    );
  }
}
