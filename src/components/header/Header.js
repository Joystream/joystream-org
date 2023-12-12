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
          <span className="hidden_320">
            Back <span className="hidden_425">to joystrem.org</span>
          </span>
        </Link>
        <div>
          <img src={Gleev} alt="logo" />
          gleev
        </div>
        <div>
          <button className="primary-button">
            <span>Chat</span> <span className="hidden_320 hidden_425">with Joystream team</span>{' '}
            <img className="hidden_320" src={Avatar} alt="avatar" />
          </button>
        </div>
      </div>
      <div className="navbarlist">
        <div>
          {Navbarlist.map((item, idx) => (
            <button className="primary-button" key={idx}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
