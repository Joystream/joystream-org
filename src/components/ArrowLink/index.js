import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { ReactComponent as Arrow } from '../../assets/svg/arrow-down-small.svg';
import cn from 'classnames';

import './style.scss';

export const ArrowLink = ({ className, href, to, text, dark }) => {
  const children = (
    <>
      {text}
      <Arrow className="ArrowLink__arrow" />
    </>
  );
  // const children = (
  //   <div
  //     className={cn(`ArrowLink ${className ?? ''}`, {
  //       'ArrowLink--dark': dark,
  //     })}
  //   >
  //   </div>
  // );

  // if (to) {
  //   return <Link to={to}>{children}</Link>;
  // }

  return (
    <a href={href} className={`ArrowLink ${className}`}>
      {children}
    </a>
  );
};

export default ArrowLink;
