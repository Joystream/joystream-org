import React from 'react';
import Plx from 'react-plx';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import JoystreamDaoBackgroundImage from '../../../assets/images/landing/joystream-dao-background.png';
import JoystreamDaoForegroundImage from '../../../assets/images/landing/joystream-dao-foreground.png';

import './style.scss';

const joystreamDaoForeground = [
  {
    start: 0,
    end: 9500,
    easing: 'easeIn',
    properties: [
      {
        startValue: 700,
        endValue: 445,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
  {
    start: 9500,
    end: 10000,
    properties: [
      {
        startValue: 445,
        endValue: 445,
        property: 'translateY',
        unit: "px"
      },
    ],
  },
  {
    start: 10000,
    end: 10400,
    easing: 'easeIn',
    properties: [
      {
        startValue: 445,
        endValue: 380,
        property: 'translateY',
        unit: "px"
      },
    ],
  }
];


const JoystreamDAO = () => {
  return (
    <div className='IndexPage__joystream-dao-wrapper'>
      <div className='IndexPage__joystream-dao'>
        <div className='IndexPage__joystream-dao__content'>
          <h3 className='IndexPage__joystream-dao__content__section-title'>JOYSTREAM DAO</h3>
          <h2 className='IndexPage__joystream-dao__content__title'>Have a hand in shaping the future of Joystream.<br/>Join our DAO.</h2>
          <p className='IndexPage__joystream-dao__content__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet rhoncus iaculis viverra nunc gravida a egestas. Urna pellentesque laoreet facilisis pharetra at arcu vitae.</p>
          <a href="https://dao.joystream.org/" className='IndexPage__joystream-dao__content__link'>
            Go to Pioneer
            <ArrowIcon className='IndexPage__joystream-dao__content__link__arrow' />
          </a>
        </div>
        <div className='IndexPage__joystream-dao__illustration'>
          <img src={JoystreamDaoBackgroundImage} className="IndexPage__joystream-dao__illustration__background" alt="joystream governance product, open on tab working groups, outlining the currently available groups"/>
          <Plx parallaxData={joystreamDaoForeground} animateWhenNotInViewport={true}>
            <img src={JoystreamDaoForegroundImage} className="IndexPage__joystream-dao__illustration__foreground" alt="one of the working groups rows extracted in front of the others"/>
          </Plx>
        </div>
      </div>
    </div>
  );
}

export default JoystreamDAO;