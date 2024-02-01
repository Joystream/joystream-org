import React from 'react';
import { string, node, func, bool, oneOfType, object } from 'prop-types';
import cn from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Button from '../Button';
import ModalWrapper from '../ModalWrapper';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  image: oneOfType([object, string]),
  closeModal: func.isRequired,
  isOpen: bool.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
  image: null,
};

const TestnetModal = ({ title, children, image, closeModal, className, isOpen }) => {
  const classes = cn(className, 'TestnetModal');
  const { t } = useTranslation();

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
          <Button onClick={closeModal} className="TestnetModal__button">
            {t('button.close')}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

TestnetModal.propTypes = propTypes;
TestnetModal.defaultProps = defaultProps;

export default TestnetModal;
