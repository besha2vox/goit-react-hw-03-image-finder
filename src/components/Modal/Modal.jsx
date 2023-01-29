import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    discription: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handlerKeyupEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlerKeyupEscape);
  }

  handlerKeyupEscape = ({ code }) => {
    if (code !== 'Escape') return;
    this.props.onCloseModal();
  };

  handlerClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.onCloseModal();
  };

  render() {
    const { imgUrl, discription } = this.props;
    const { handlerClickOverlay } = this;

    return createPortal(
      <Overlay onClick={handlerClickOverlay}>
        <ModalWindow>
          <img src={imgUrl} alt={discription} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
