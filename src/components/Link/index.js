import React from 'react';
import { string, bool, node } from 'prop-types';
import { Link as DefaultLink } from 'gatsby';
import cn from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { linkPropTypes } from '../../propTypes';

import './style.scss';

const propTypes = {
  ...linkPropTypes,
  children: node.isRequired,
  highlighted: bool,
  className: string,
};

const defaultProps = {
  highlighted: false,
  className: '',
};

const Link = ({
  to,
  href,
  children,
  highlighted,
  className,
  activeClassName,
  ...props
}) => {
  const classes = cn(className, 'Link', {
    'Link--highlighted': highlighted,
  });

  if (href) {
    const AnchorElement = href.startsWith('#') ? AnchorLink : 'a';

    return (
      <AnchorElement
        href={href}
        className={classes}
        offset={href.startsWith('#') ? '100' : undefined}
        {...props}
      >
        {children}
      </AnchorElement>
    );
  }

  if (to) {
    return (
      <DefaultLink
        to={to}
        className={classes}
        activeClassName={activeClassName}
        {...props}
      >
        {children}
      </DefaultLink>
    );
  }
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
