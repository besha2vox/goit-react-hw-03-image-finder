import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onCloseModal, imgUrl, discription }) => {
  useEffect(() => {
    const handlerKeyupEscape = ({ code }) => {
      console.log('code', code);
      if (code !== 'Escape') return;
      onCloseModal();
    };

    window.addEventListener('keyup', handlerKeyupEscape);

    return () => window.removeEventListener('keyup', handlerKeyupEscape);
  });

  const handlerClickOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handlerClickOverlay}>
      <ModalWindow>
        <img src={imgUrl} alt={discription} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
};

export default Modal;
