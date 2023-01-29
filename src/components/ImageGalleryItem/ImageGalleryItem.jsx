import { GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageUrl, imageAlt }) => {
  return (
    <GalleryItem>
      <img src={imageUrl} alt={imageAlt} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
