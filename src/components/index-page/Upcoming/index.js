import React from 'react';

import { ArrowButton } from '../../ArrowButton';

import BuilderIcon1 from '../../../assets/images/landing/builder-icon-1.webp';
import BuilderIcon2 from '../../../assets/images/landing/builder-icon-2.webp';
import BuilderIcon3 from '../../../assets/images/landing/builder-icon-3.webp';
import BuilderIcon4 from '../../../assets/images/landing/builder-icon-4.webp';
import BuilderIcon5 from '../../../assets/images/landing/builder-icon-5.webp';

import './style.scss';

const Upcoming = ({ t }) => {
  return (
    <div className="IndexPage__upcoming-wrapper">
      <div className="IndexPage__upcoming">
        <header className="IndexPage__upcoming__header">
          <span className="IndexPage__upcoming__header__section-title">UPCOMING</span>
          <h2 className="IndexPage__upcoming__header__title">Builders Grant Program</h2>
          <p className="IndexPage__upcoming__header__subtitle">
            If you are a developer - you can get a grant, development support, business model support and more.
          </p>
        </header>
        <div className="IndexPage__upcoming__builders">
          <div className="IndexPage__upcoming__builder">
            <img src={BuilderIcon1} alt="" />
          </div>
          <div className="IndexPage__upcoming__builder">
            <img src={BuilderIcon2} alt="" />
          </div>
          <div className="IndexPage__upcoming__builder">
            <img src={BuilderIcon3} alt="" />
          </div>
          <div className="IndexPage__upcoming__builder">
            <img src={BuilderIcon4} alt="" />
          </div>
          <div className="IndexPage__upcoming__builder">
            <img src={BuilderIcon5} alt="" />
          </div>
        </div>
        <ArrowButton
          link=""
          text="Sign up for program"
          className="IndexPage__upcoming__button"
          textClassname="IndexPage__upcoming__button-text"
        />
      </div>
    </div>
  );
};

export default Upcoming;
