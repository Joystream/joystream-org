import React from 'react';

import Link from '../Link';

import { ReactComponent as BackIcon } from '../../assets/svg/back.svg';
import Gleev from '../../assets/images/gleev.png';
import Avatar from '../../assets/images/avatar.png';

import './style.scss';

const Navbarlist = [
  'Project Intro',
  '1. Token',
  '2. Backers',
  '3. History',
  '4. Traction',
  '5. Engineering',
  '6. Community',
  '7. Team',
  '8. Comparison',
  '9. Roadmap',
];

const Header = () => {
  return (
    <>
      <div className="container-wrapper header">
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
        {
          Navbarlist.map((item, idx) => (
            <button className="primary-button" key={idx}>{item}</button>
          ))
        }
      </div>
    </>
  );
};

export default Header;
