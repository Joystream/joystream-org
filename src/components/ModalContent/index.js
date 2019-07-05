import React from 'react';
import { string, node, func } from 'prop-types';
import cn from 'classnames';
import Button from '../Button';

import './style.scss';
import { action } from '@storybook/addon-actions';

const propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  className: string,
  image: func,
};

const defaultProps = {
  className: '',
  image: null,
};

const ModalContent = ({ title, className, children, image, ...props }) => {
  const classes = cn(className, 'ModalContent');

  return (
    <section className={classes} {...props}>
      {image && (
        <div className="ModalContent__wrapper">
          <img className="ModalContent__image" src={image} alt={title} />
        </div>
      )}
      <h2 className="ModalContent__title">{title}</h2>
      {children}
      <Button onClick={action('clicked')} large>
        Close
      </Button>
    </section>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
