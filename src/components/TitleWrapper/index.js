import React from 'react';
import { string, node, oneOfType, func } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  subtitle: oneOfType([string, node, func]),
  children: node.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
  subtitle: '',
};

const TitleWrapper = ({ title, subtitle, className, children, ...props }) => {
  const classes = cn(className, 'TitleWrapper');

  return (
    <section className={classes} {...props}>
      <h2 className="TitleWrapper__title">{title}</h2>
      {subtitle && <div className="TitleWrapper__subtitle">{subtitle}</div>}
      {children}
    </section>
  );
};

TitleWrapper.propTypes = propTypes;
TitleWrapper.defaultProps = defaultProps;

export default TitleWrapper;
