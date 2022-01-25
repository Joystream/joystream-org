import React from 'react';
import Link from '../../../Link';
import { ReactComponent as Arrow } from '../../../../assets/svg/arrow-down-small.svg';
import './style.scss';

const FooterAction = ({ title, subtitle, buttonTitle, to, href }) => {
  return (
    <div className="FooterAction__hero-wrapper">
      <div className="FooterAction__hero">
        <div className="FooterAction__hero__content">
          <h1 className="FooterAction__hero__title">{title}</h1>
          <h2 className="FooterAction__hero__subtitle">{subtitle}</h2>
          <Link key={buttonTitle} to={to} href={href}>
            <div className="FooterAction__hero__button">
              <p className="FooterAction__hero__button-text">{buttonTitle}</p>
              <Arrow className="FooterAction__hero__button-arrow" />
            </div>
          </Link>
        </div>
        <div className="FooterAction__hero__content">
          <div className="FooterAction__hero__video"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterAction;
