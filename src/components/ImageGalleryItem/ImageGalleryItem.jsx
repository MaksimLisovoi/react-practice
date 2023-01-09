import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url, alt }) => (
  <GalleryItem>
    <GalleryImg src={url} alt={alt} />
  </GalleryItem>
);
