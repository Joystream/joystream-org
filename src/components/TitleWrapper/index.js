import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  subtitle: oneOfType([string, node]),
  children: node.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
  subtitle: '',
};

const TitleWrapper = ({ title, subtitle, className, children, ...props }) => {
  const classes = cn(
    className,
    'TitleWrapper',
  );

  return (
    <section className={ classes } { ...props }>
      <h2 className="TitleWrapper__title">{ title }</h2>
      {subtitle && <p className="TitleWrapper__subtitle">{subtitle}</p>}
      { children }
    </section>
  );
};

TitleWrapper.propTypes = propTypes;
TitleWrapper.defaultProps = defaultProps;

export default TitleWrapper;
