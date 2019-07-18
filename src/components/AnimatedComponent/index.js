import React from 'react';
import { node, string, oneOfType, oneOf, number } from 'prop-types';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  children: oneOfType([node, string]).isRequired,
  animation: oneOf(['fadeIn', 'bounce']).isRequired,
  threshold: number,
};

const defaultProps = {
  threshold: 1,
};

const Animated = ({ children, animation, threshold }) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  const animationTypes = {
    fadeIn: 'Animated--fade-in',
    bounce: 'Animated--bounce',
  };

  const classes = cn('Animated', {
    [`${animationTypes[animation]}`]: inView,
  });

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

Animated.propTypes = propTypes;
Animated.defaultProps = defaultProps;

export default Animated;
