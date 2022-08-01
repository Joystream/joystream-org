import React from 'react';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';
import PayoutsBackgroundImage from '../../../assets/images/landing/joystream-dao-background.png';

import './style.scss';

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
          <img src={PayoutsBackgroundImage} className="IndexPage__joystream-dao__illustration__image" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default JoystreamDAO;