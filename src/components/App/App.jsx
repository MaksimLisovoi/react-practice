import React, { Component } from 'react';

import { AppBody, LoadMoreBtn, Heading } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import picturesApi from '../../services/pictures-api';

export class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    currenImg: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
      error: null,
    });
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
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, isLoading, error } = this.state;
    const shouldRenderLoadMoreBtn = pictures.length > 0 && !isLoading;

    return (
      <>
        {error && <Heading>Ошибка !!!</Heading>}
        <AppBody>
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery pictures={pictures} />
          {isLoading && <Heading>Loading...</Heading>}
          {shouldRenderLoadMoreBtn && (
            <LoadMoreBtn onClick={this.fetchPictures} type="button">
              Load more...
            </LoadMoreBtn>
          )}
        </AppBody>
      </>
    );
  }
}
