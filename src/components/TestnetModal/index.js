import React from 'react';
import { string, node, func, bool } from 'prop-types';
import cn from 'classnames';
import Button from '../Button';
import ModalWrapper from '../ModalWrapper';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  image: func,
  closeModal: func.isRequired,
  isOpen: bool.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
  image: null,
};

const TestnetModal = ({
  title,
  children,
  image,
  closeModal,
  className,
  isOpen,
}) => {
  const classes = cn(className, 'TestnetModal');

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <div className={classes}>
        {image && (
          <div className="TestnetModal__header">
            <img className="TestnetModal__image" src={image} alt={title} />
          </div>
        )}
        <div className="TestnetModal__container">
          <h2 className="TestnetModal__title">{title}</h2>
          {children}
          <Button onClick={closeModal} large className="TestnetModal__button">
            Close
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

TestnetModal.propTypes = propTypes;
TestnetModal.defaultProps = defaultProps;

export default TestnetModal;
