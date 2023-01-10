import { GalleryList } from './ImageGallery.styled';
import React, { Component } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { Modal } from '../Modal';
// import { id } from 'date-fns/locale';

export class ImageGallery extends Component {
  state = {
    showModal: false,
    currentImg: null,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ currentImg: imgUrl });
    this.toggleModal();
  };

  render() {
    const { pictures } = this.props;
    const { showModal, currentImg } = this.state;
    return (
      <>
        <GalleryList>
          {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webImgUrl={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
              onClick={this.getLargeImgUrl}
            />
          ))}
        </GalleryList>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={currentImg} alt="img"></img>
          </Modal>
        )}
      </>
    );
  }
}
