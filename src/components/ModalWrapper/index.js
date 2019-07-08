import React from 'react';
import Modal from 'react-modal';
import { bool, node } from 'prop-types';

import './style.scss';

const propTypes = {
  isOpen: bool.isRequired,
  children: node,
};

const defaultProps = {
  children: null,
};

const ModalWrapper = ({ isOpen, children, closeModal }) => (
  <Modal
    isOpen={isOpen}
    className="Modal"
    overlayClassName="Modal__overlay"
    contentLabel="modal"
    closeTimeoutMS={200}
    appElement={document.querySelector('body')}
    onRequestClose={closeModal}
  >
    <div className="Modal__content">{children}</div>
  </Modal>
);

ModalWrapper.propTypes = propTypes;
ModalWrapper.defaultProps = defaultProps;

export default ModalWrapper;
