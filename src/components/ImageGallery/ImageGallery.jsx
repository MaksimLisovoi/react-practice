import { GalleryList } from './ImageGallery.styled';
import React, { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { Modal } from '../Modal';
// import { id } from 'date-fns/locale';

export class ImageGallery extends Component {
  state = {};
  render() {
    const { pictures } = this.props;
    return (
      <>
        <GalleryList>
          {pictures.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} url={webformatURL} alt={tags} />
          ))}
        </GalleryList>
      </>
    );
  }
}
