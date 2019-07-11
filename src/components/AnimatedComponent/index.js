import React from 'react';
import { node, string, oneOfType, bool } from 'prop-types';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  children: oneOfType([node, string]).isRequired,
  fadeIn: bool,
  bounce: bool,
};

const defaultProps = {
  fadeIn: false,
  bounce: false,
};

const Animated = ({ children, fadeIn, bounce }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const classes = cn('Animated', {
    'Animated--fade-in': inView && fadeIn,
    'Animated--bounce': inView && bounce,
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
