import React from 'react';
import { string, node } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const TitleWrapper = ({ title, className, children, ...props }) => {
  const classes = cn(
    className,
    'TitleWrapper',
  );

  return (
    <section className={ classes } { ...props }>
      <h2 className="TitleWrapper__title">{ title }</h2>
      { children }
    </section>
  );
};

TitleWrapper.propTypes = propTypes;
TitleWrapper.defaultProps = defaultProps;

export default TitleWrapper;
