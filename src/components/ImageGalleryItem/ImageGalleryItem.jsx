import { GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, imageAlt, openModal }) => {
  return (
    <GalleryItem onClick={openModal}>
      <img src={imageUrl} alt={imageAlt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
