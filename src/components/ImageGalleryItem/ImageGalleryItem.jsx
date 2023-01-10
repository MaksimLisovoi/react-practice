import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webImgUrl, largeImg, alt, onClick }) => (
  <GalleryItem
    onClick={() => {
      onClick(largeImg);
    }}
  >
    <GalleryImg src={webImgUrl} alt={alt} />
  </GalleryItem>
);
