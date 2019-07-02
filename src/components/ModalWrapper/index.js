import React from 'react';
import Modal from 'react-modal';
import { bool, node } from 'prop-types';

import './style.scss';

const propTypes = {
  isOpen: bool.isRequired,
  children: node,
};

const defaultProps = {
  isOpen: false,
  children: null,
};

const ModalWrapper = ({ isOpen, children }) => (
  <Modal
    isOpen={isOpen}
    className="Modal"
    overlayClassName="Modal__overlay"
    contentLabel="modal"
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick={false}
    appElement={document.querySelector('body')}
  >
    <div>{children}</div>
  </Modal>
);

ModalWrapper.propTypes = propTypes;
ModalWrapper.defaultProps = defaultProps;

export default ModalWrapper;
