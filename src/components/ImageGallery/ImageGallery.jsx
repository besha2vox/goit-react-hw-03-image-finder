import { GalerryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

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

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  query: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
