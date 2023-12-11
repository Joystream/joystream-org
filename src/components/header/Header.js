import React from 'react';

import Link from '../Link';

import { ReactComponent as BackIcon } from '../../assets/svg/back.svg';
import Gleev from '../../assets/images/gleev.png';
import Avatar from '../../assets/images/avatar.png';

import './style.scss';

const Navbarlist = [
  'Introduction',
  'Token',
  'Backers',
  'History',
  'Traction',
  'Engineering',
  'Community',
  'Team',
  'Comparison',
  'Roadmap',
];

const Header = () => {
  return (
    <>
      <div className="header">
        <Link className="" to="/">
          <BackIcon />
          Back to joystrem.org
        </Link>
        <div>
          <img src={Gleev} alt="logo" />
          gleev
        </div>
        <div>
          <button className="primary-button">
            Chat with Joystream team <img src={Avatar} alt="avatar" />
          </button>
        </div>
      </div>
      <div className="navbarlist">
        <div>
          {
            Navbarlist.map((item, idx) => (
              <button className="primary-button" key={idx}>{item}</button>
            ))
          }
        </div>
    
      </div>
    </>
  );
};

export default Header;
