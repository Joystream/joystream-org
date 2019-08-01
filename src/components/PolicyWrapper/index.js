import React from 'react';
import { string, node, bool } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  subtitle: string,
  children: node.isRequired,
  className: string,
  left: bool,
};

const defaultProps = {
  className: '',
  subtitle: '',
  left: false,
};

const PolicyWrapper = ({ title, subtitle, className, left, children, ...props }) => {
  const classes = cn(className, 'PolicyWrapper', { 'PolicyWrapper--left': left });

  return (
    <section className={classes} {...props}>
      <div className="PolicyWrapper__header">
        <h2 className="PolicyWrapper__title">{title}</h2>
        {subtitle && <p className="PolicyWrapper__subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};

PolicyWrapper.propTypes = propTypes;
PolicyWrapper.defaultProps = defaultProps;

export default PolicyWrapper;
