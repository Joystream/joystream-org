import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import cn from 'classnames';

import './style.scss';

export const ArrowLink = ({ className, href, to, text, dark }) => {
  const children = (
    <div
      className={cn(`ArrowLink ${className ?? ''}`, {
        'ArrowLink--dark': dark,
      })}
    >
      <p className="ArrowLink__text">{text}</p>
      <Arrow className="ArrowLink__arrow" />
    </div>
  );

  if (to) {
    return <Link to={to}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
};

export default ArrowLink;
