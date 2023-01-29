import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return createPortal(
      <Overlay>
        <ModalWindow>
          <img src="" alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
