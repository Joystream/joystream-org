import React from 'react';
import { string, oneOfType, func } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  icon: oneOfType([string, func]),
  className: string,
};

const defaultProps = {
  icon: null,
  className: '',
};

const Subheader = ({ title, content, icon: Icon, className }) => {
  return (
    <div className={cn('Subheader', className)}>
      <Icon className="Subheader__image" />
      <div>
        <h3 className="Subheader__title">{title}</h3>
        <p className="Subheader__content">{content}</p>
      </div>
    </div>
  );
};

Subheader.propTypes = propTypes;
Subheader.defaultProps = defaultProps;

export default Subheader;
