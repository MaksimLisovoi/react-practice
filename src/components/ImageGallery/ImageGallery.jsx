import { GalleryList } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem';
// import { id } from 'date-fns/locale';

export const ImageGallery = ({ pictures }) => (
  <GalleryList>
    {pictures.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem key={id} url={webformatURL} alt={tags} />
    ))}
  </GalleryList>
);
