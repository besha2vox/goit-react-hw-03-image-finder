import { GalerryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items, query }) => {
  return (
    <GalerryList>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} imageUrl={webformatURL} imageAlt={query} />
      ))}
    </GalerryList>
  );
};

export default ImageGallery;
