import { GalerryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ items, query, openModal }) => {
  return (
    <GalerryList>
      {items.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          openModal={() => openModal(id)}
          key={id}
          imageUrl={webformatURL}
          imageAlt={query}
        />
      ))}
    </GalerryList>
  );
};

export default ImageGallery;
