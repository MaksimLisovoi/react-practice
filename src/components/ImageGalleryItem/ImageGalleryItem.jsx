import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal';

export const ImageGalleryItem = ({ webImgUrl, largeImg, alt, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GalleryItem>
      <GalleryImg
        onClick={() => {
          setIsModalOpen(true);
        }}
        src={webImgUrl}
        alt={alt}
      />
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <img src={largeImg} alt={alt}></img>
        </Modal>
      )}
    </GalleryItem>
  );
};
