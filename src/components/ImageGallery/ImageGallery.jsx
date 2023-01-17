import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => {
  return (
    <>
      <GalleryList>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webImgUrl={webformatURL}
            largeImg={largeImageURL}
            alt={tags}
          />
        ))}
      </GalleryList>
    </>
  );
};
