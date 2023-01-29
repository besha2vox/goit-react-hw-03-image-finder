import { GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, imageAlt, openModal }) => {
  return (
    <GalleryItem onClick={openModal}>
      <img src={imageUrl} alt={imageAlt} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
