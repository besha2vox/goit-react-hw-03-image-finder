import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ children, loadMore }) => {
  return <LoadMoreButton onClick={loadMore}>{children}</LoadMoreButton>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
