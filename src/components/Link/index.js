import React from 'react';
import { string, bool, node } from 'prop-types';
import { Link as DefaultLink } from 'gatsby';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  to: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(`One of props 'to' or 'href' was not specified in '${componentName}'.`);
    }
  },
  href: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(`One of props 'href' or 'to' was not specified in '${componentName}'.`);
    }
  },
  children: node.isRequired,
  highlighted: bool,
  className: string,
};

const defaultProps = {
  highlighted: false,
  className: '',
};

const Link = ({ to, href, children, highlighted, className, activeClassName, ...props }) => {
  const classes = cn(
    className,
    'Link',
    {
      'Link--highlighted': highlighted,
    },
  );

  if(href) {
    return <a href={ href } className={ classes } { ...props }>{ children }</a>;
  }

  if(to) {
    return (
      <DefaultLink
        to={ to }
        className={ classes }
        activeClassName={ activeClassName }
        { ...props }
      >
        { children }
      </DefaultLink>
    );
  }
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
