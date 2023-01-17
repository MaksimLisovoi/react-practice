import { GalleryList } from './ImageGallery.styled';
import { useState } from 'react';

import { ImageGalleryItem } from 'components/ImageGalleryItem';

import { Modal } from '../Modal';
// import { id } from 'date-fns/locale';

export const ImageGallery = ({ pictures }) => {
  const [showModal, setShowModal] = useState(false);

  const [currentImg, setCurrentImg] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getLargeImgUrl = imgUrl => {
    setCurrentImg(imgUrl);
    toggleModal();
  };

  return (
    <>
      <GalleryList>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webImgUrl={webformatURL}
            largeImg={largeImageURL}
            alt={tags}
            onClick={getLargeImgUrl}
          />
        ))}
      </GalleryList>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={currentImg} alt="img"></img>
        </Modal>
      )}
    </>
  );
};
