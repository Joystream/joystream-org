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

const TestnetModal = ({ title, className, children, image, ...props }) => {
  const classes = cn(className, 'TestnetModal');

  return (
    <section className={classes} {...props}>
      {image && (
        <div className="TestnetModal__header">
          <img className="TestnetModal__image" src={image} alt={title} />
        </div>
      )}
      <div className="TestnetModal__container">
        <h2 className="TestnetModal__title">{title}</h2>
        {children}
        <Button
          onClick={action('clicked')}
          large
          className="TestnetModal__button"
        >
          Close
        </Button>
      </div>
    </section>
  );
};

TestnetModal.propTypes = propTypes;
TestnetModal.defaultProps = defaultProps;

export default TestnetModal;
