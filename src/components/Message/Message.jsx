import { Notification } from './Message.styled';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return <Notification>{message}</Notification>;
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
