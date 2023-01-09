import React, { Component } from 'react';
import axios from 'axios';

import { AppBody } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export class App extends Component {
  state = {
    pictures: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=19973249-c52aafd5b7bc4f65352a2c6d7&q=yellow+flowers&image_type=photo',
      )
      .then(({ data }) => {
        console.log(data.hits);
        this.setState({ pictures: data.hits });
      });

    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { pictures } = this.state;
    return (
      <AppBody>
        <Searchbar />

        <ImageGallery pictures={pictures} />
      </AppBody>
    );
  }
}
