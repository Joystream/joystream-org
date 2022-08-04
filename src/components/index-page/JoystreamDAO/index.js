import React from 'react';
import Plx from 'react-plx';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import JoystreamDaoBackgroundImage from '../../../assets/images/landing/joystream-dao-background.png';
import JoystreamDaoForegroundImage from '../../../assets/images/landing/joystream-dao-foreground.png';

import './style.scss';

const joystreamDaoForeground = [
  {
    start: 0,
    end: '.IndexPage__joystream-dao__illustration',
    endOffset: 0,
    easing: 'easeIn',
    properties: [
      {
        startValue: 510,
        endValue: 510,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: '.IndexPage__joystream-dao__illustration',
    startOffset: 0,
    end: '.IndexPage__joystream-dao__illustration',
    endOffset: 600,
    easing: 'easeIn',
    properties: [
      {
        startValue: 510,
        endValue: 445,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: '.IndexPage__joystream-dao__illustration',
    startOffset: 600,
    end: '.IndexPage__joystream-dao__illustration',
    endOffset: 1000,
    easing: 'easeIn',
    properties: [
      {
        startValue: 445,
        endValue: 445,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
  {
    start: '.IndexPage__joystream-dao__illustration',
    startOffset: 1000,
    end: '.IndexPage__joystream-dao__illustration',
    endOffset: 1500,
    easing: 'easeIn',
    properties: [
      {
        startValue: 445,
        endValue: 400,
        property: 'translateY',
        unit: 'px',
      },
    ],
  },
];

const JoystreamDAO = () => {
  return (
    <div className="IndexPage__joystream-dao-wrapper">
      <div className="IndexPage__joystream-dao">
        <div className="IndexPage__joystream-dao__content">
          <h3 className="IndexPage__joystream-dao__content__section-title">JOYSTREAM DAO</h3>
          <h2 className="IndexPage__joystream-dao__content__title">
            Have a hand in shaping the future of Joystream.<br /> Join our DAO.
          </h2>
          <p className="IndexPage__joystream-dao__content__subtitle">
            Pioneer is the place to participate in community governance and operation. Vote on elections, submit
            proposals or enter a paid role to support the platform growth.
          </p>
          <a href="https://dao.joystream.org/" className="IndexPage__joystream-dao__content__link">
            Go to Pioneer
            <ArrowIcon className="IndexPage__joystream-dao__content__link__arrow" />
          </a>
        </div>
        <div className="IndexPage__joystream-dao__illustration">
          <img
            src={JoystreamDaoBackgroundImage}
            className="IndexPage__joystream-dao__illustration__background"
            alt="joystream governance product, open on tab working groups, outlining the currently available groups"
          />
          <Plx parallaxData={joystreamDaoForeground} animateWhenNotInViewport={true}>
            <img
              src={JoystreamDaoForegroundImage}
              className="IndexPage__joystream-dao__illustration__foreground"
              alt="one of the working groups rows extracted in front of the others"
            />
          </Plx>
        </div>
      </div>
    </div>
  );
};

export default JoystreamDAO;
