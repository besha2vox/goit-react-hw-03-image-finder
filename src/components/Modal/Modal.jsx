import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
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
    console.log(target, currentTarget, target === currentTarget);
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
