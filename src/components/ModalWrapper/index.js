import React from 'react';
import Modal from 'react-modal';
import { bool, node, func } from 'prop-types';

import './style.scss';

const propTypes = {
  isOpen: bool.isRequired,
  children: node,
  closeModal: func.isRequired,
};

const defaultProps = {
  children: null,
};

Modal.setAppElement('body');

const ModalWrapper = ({ isOpen, children, closeModal }) => (
  <Modal
    isOpen={isOpen}
    className="Modal"
    overlayClassName="Modal__overlay"
    contentLabel="modal"
    closeTimeoutMS={200}
    onRequestClose={closeModal}
  >
    <div className="Modal__container">
      <div className="Modal__content">{children}</div>
    </div>
  </Modal>
);

ModalWrapper.propTypes = propTypes;
ModalWrapper.defaultProps = defaultProps;

export default ModalWrapper;
