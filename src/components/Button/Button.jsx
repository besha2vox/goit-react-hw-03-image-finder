import { LoadMoreButton } from './Button.styled';

const Button = ({ children, loadMore }) => {
  return <LoadMoreButton onClick={loadMore}>{children}</LoadMoreButton>;
};

export default Button;
